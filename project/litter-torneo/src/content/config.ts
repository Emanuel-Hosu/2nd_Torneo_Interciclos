import { defineCollection, z } from "astro:content";

const juegos = defineCollection({
    schema: z.object({
        title: z.string(),
        platform: z.string(),
        mode: z.string(),
        img: z.string(),
        imgv: z.string(),
        imgh: z.string(),
        need: z.string(),
    }),
});

export const collections = { juegos };