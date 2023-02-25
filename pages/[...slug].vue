<template>
	<section class="prose prose-zinc dark:prose-invert mx-auto max-w-full px-4 pt-2">
		<ClientOnly>
			<ContentDoc>
				<template v-slot="{ doc }">
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
				</template>
				<template #not-found>
					<sections-content-not-found />
				</template>
				<template #empty>
					<sections-content-empty />
				</template>
			</ContentDoc>
		</ClientOnly>
	</section>

	<div class="px-4 pt-6 text-right md:px-0">
		<nuxt-link href="/" class="font-semibold">
			<button class="btn btn-ghost">
				<svg class="mr-2 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
				</svg>
				Go Back
			</button>
		</nuxt-link>
	</div>
</template>

<script setup lang="ts">
const date = new Intl.DateTimeFormat(['en-GB', 'en-US']);
const longDate = new Intl.DateTimeFormat(['en-GB', 'en-US'], { dateStyle: 'full' });
</script>

<style scoped>
.btn {
	@apply inline-flex h-12 min-h-[3rem] flex-shrink-0 cursor-pointer select-none flex-wrap items-center justify-center rounded-lg border px-4 text-center leading-4 no-underline;
	transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
		backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
	transition-duration: 0.2s;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

	animation: button-pop 0.25s ease-out;
	--tw-border-opacity: 1;
	--tw-bg-opacity: 1;
	--tw-text-opacity: 1;
}

.btn-ghost {
	@apply border border-transparent bg-transparent text-current;
}

.btn-ghost:hover,
.btn-ghost.btn-active,
.btn:hover,
.btn:active {
	@apply bg-zinc-300/20 shadow-md drop-shadow-md dark:bg-stone-500/20;
}
</style>
