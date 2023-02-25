<template>
	<ContentDoc v-slot="{ doc }">
		<section class="prose prose-zinc dark:prose-invert mx-auto max-w-full px-4 pt-2">
			<img :src="`/images/${doc.image}.png`" class="mb-0 inline w-24 select-none rounded-lg align-top shadow-lg" :alt="doc.image" />
			<div class="inline-block pl-4">
				<h1 class="mb-1 mt-2">{{ doc.title }}</h1>
				<small class="opacity-80">
					Published on <u :title="longDate.format(new Date(doc.date))">{{ date.format(new Date(doc.date)) }}</u> by
					<span class="opacity-90">{{ doc.author }}</span>
				</small>
			</div>
			<hr />
			<ContentRenderer :value="doc" />
		</section>
	</ContentDoc>

	<div class="pt-6 text-right">
		<nuxt-link href="/" class="font-semibold delay-200 ease-in-out hover:text-indigo-500">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="-mt-1 inline-block h-6 w-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
			</svg>
			Go Back
		</nuxt-link>
	</div>
</template>

<script setup lang="ts">
const date = new Intl.DateTimeFormat();
const longDate = new Intl.DateTimeFormat(undefined, { dateStyle: 'full' });
</script>
