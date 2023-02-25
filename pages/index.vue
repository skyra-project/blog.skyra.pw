<template>
	<h2 class="text-4xl font-extrabold mb-12 pt-4 text-center">Latest articles</h2>
	<div class="grid lg:grid-cols-2 gap-1 lg:gap-10">
		<ContentList v-slot="{ list }" :query="query">
			<div v-for="article of list" :key="article._path" class="sm:rounded-lg bg-zinc-100 dark:bg-zinc-700 p-4">
				<nuxt-link :to="article._path">
					<img
						:src="`/images/${article.image}.png`"
						class="w-24 h-24 hover:saturate-150 shadow-lg rounded-lg inline select-none"
						:alt="article.image"
					/>
				</nuxt-link>

				<div class="inline-block pl-4">
					<nuxt-link :to="article._path" class="text-xl font-semibold hover:underline mb-3">
						{{ article.title }}
					</nuxt-link>
					<p class="opacity-80 mb-6">
						<small>
							Published on <u :title="longDate.format(new Date(article.date))">{{ date.format(new Date(article.date)) }}</u> by
							<span class="opacity-90">{{ article.author }}</span></small
						>
					</p>
				</div>

				<p class="opacity-90 pt-4">
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
