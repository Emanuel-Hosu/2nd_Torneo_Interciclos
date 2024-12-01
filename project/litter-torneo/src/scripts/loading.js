document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[data-loading]');
  
    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();  // Prevenir la acción predeterminada
  
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
          console.log("Mostrar el spinner");  // Verificación de que el evento funciona
          loadingOverlay.classList.remove('hidden');  // Mostrar el overlay
        }
  
        // Redirigir al enlace después de un pequeño retraso para ver el spinner
        setTimeout(() => {
          const target = event.currentTarget.href;
          window.location.href = target;
        }, 300);  // Simulamos un retraso de 300ms para que el spinner sea visible
      });
    });
  });
  