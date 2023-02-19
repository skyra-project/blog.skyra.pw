<template>
	<ContentDoc v-slot="{ doc }">
		<section class="max-w-full prose prose-zinc dark:prose-invert px-8 sm:px-0 mx-auto">
			<img :src="`/images/${doc.image}.png`" class="w-24 shadow-lg rounded-lg inline align-top mb-0 select-none" :alt="doc.image" />
			<div class="inline-block pl-4">
				<h1 class="mb-1 mt-2">{{ doc.title }}</h1>
				<small class="opacity-80">
					Published on <u>{{ new Intl.DateTimeFormat().format(new Date(doc.date)) }}</u> by
					<span class="opacity-90">{{ doc.author }}</span>
				</small>
			</div>
			<hr />
			<ContentRenderer :value="doc" />
		</section>
	</ContentDoc>

	<div class="text-right pt-6">
		<NuxtLink href="/" class="hover:text-indigo-500 delay-200 ease-in-out font-semibold">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 -mt-1 inline-block"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
			</svg>
			Go Back
		</NuxtLink>
	</div>
</template>
