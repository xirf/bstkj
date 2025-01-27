import { defineCollection, z } from 'astro:content';

const article = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		group: z.string(),
		body: z.string(),
		updatedDate: z.coerce.date().optional(),
	}),
});

export const collections = { article };
