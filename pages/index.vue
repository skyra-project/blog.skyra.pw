<template>
	<h2 class="mb-12 pt-4 text-center text-4xl font-extrabold">Latest articles</h2>
	<div class="grid gap-1 lg:grid-cols-2 lg:gap-10">
		<ContentList v-slot="{ list }" :query="query">
			<div v-for="article of list" :key="article._path" class="bg-zinc-100 p-4 dark:bg-zinc-700 sm:rounded-lg">
				<nuxt-link :to="article._path">
					<img
						:src="`/images/${article.image}.png`"
						class="inline h-24 w-24 select-none rounded-lg shadow-lg hover:saturate-150"
						:alt="article.image"
					/>
				</nuxt-link>

				<div class="inline-block pl-4">
					<nuxt-link :to="article._path" class="mb-3 text-xl font-semibold hover:underline">
						{{ article.title }}
					</nuxt-link>
					<p class="mb-6 opacity-80">
						<small>
							Published on <u :title="longDate.format(new Date(article.date))">{{ date.format(new Date(article.date)) }}</u> by
							<span class="opacity-90">{{ article.author }}</span></small
						>
					</p>
				</div>

				<p class="pt-4 opacity-90">
					{{ article.description }}
				</p>
			</div>
		</ContentList>
	</div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';

const query = {
	limit: 10,
	sort: [{ date: -1 }]
} satisfies QueryBuilderParams;

const date = new Intl.DateTimeFormat();
const longDate = new Intl.DateTimeFormat(undefined, { dateStyle: 'full' });

useHead({
	title: 'Skyra Blog'
});
</script>
