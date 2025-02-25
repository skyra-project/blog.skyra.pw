import { defineCollection, defineContentConfig, z } from '@nuxt/content';
import { asSitemapCollection } from '@nuxtjs/sitemap/content';

export default defineContentConfig({
	collections: {
		content: defineCollection(
			asSitemapCollection({
				type: 'page',
				source: '**/*.md',
				schema: z.object({
					author: z.string(),
					tags: z.array(z.string()),
					image: z.string(),
					date: z.string()
				})
			})
		)
	}
});

declare module '@nuxt/content' {
	interface ContentNavigationItem {
		author: string;
		tags: string[];
		image: string;
		date: string;
	}
}
