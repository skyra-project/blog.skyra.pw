<template>
	<div class="flex h-full flex-col pb-20">
		<div class="grid-layout grid min-h-full">
			<sections-app-header />
			<section class="grid-layout-container grid h-[calc(100vh_-_96px)] overflow-auto pb-20 lg:pb-0">
				<main>
					<slot></slot>
				</main>
			</section>
			<sections-app-footer />
		</div>
	</div>
</template>
