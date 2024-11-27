// Carrusel.js
export default class Carousel {
  constructor(element, images, interval = 3000) {
    this.element = element;
    this.images = images;
    this.interval = interval;
    this.currentIndex = 0;

    this.init();
  }

  init() {
    this.createCarouselHTML();
    this.setupNavigation();
    this.startAutoPlay();
  }

  createCarouselHTML() {
    this.element.innerHTML = `
      <div class="relative w-full max-w-xl mx-auto overflow-hidden">
        <div id="carousel-track" class="flex transition-transform duration-700 ease-in-out">
          ${this.images.map((image, index) => `
            <div class="w-full flex-shrink-0">
              <img 
                src="${image}" 
                alt="Slide ${index + 1}" 
                class="w-full h-64 object-cover"
              />
            </div>
          `).join('')}
        </div>
        
        <div id="carousel-indicators" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          ${this.images.map((_, index) => `
            <button 
              data-index="${index}" 
              class="w-3 h-3 rounded-full ${index === 0 ? 'bg-blue-600' : 'bg-gray-300'}"
            ></button>
          `).join('')}
        </div>
      </div>
    `;

    this.track = this.element.querySelector('#carousel-track');
    this.indicators = this.element.querySelectorAll('#carousel-indicators button');
  }

  setupNavigation() {
    const indicators = this.element.querySelectorAll('#carousel-indicators button');
    indicators.forEach(indicator => {
      indicator.addEventListener('click', () => {
        const index = parseInt(indicator.dataset.index);
        this.goToSlide(index);
      });
    });
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateCarousel();
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
  }

  updateCarousel() {
    // Mover el carrusel
    this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    
    // Actualizar indicadores
    this.indicators.forEach((indicator, index) => {
      indicator.classList.toggle('bg-blue-600', index === this.currentIndex);
      indicator.classList.toggle('bg-gray-300', index !== this.currentIndex);
    });
  }

  // Método para detener el autoplay si es necesario
  stopAutoPlay() {
    clearInterval(this.intervalId);
  }
}