<template>
	<div>
		<HeaderBanner />
		<slot />
	</div>
</template>

<script>
import Footer from '~/components/Footer.vue';
import HeaderBanner from '~/components/HeaderBanner.vue';

export default {
	components: {
		HeaderBanner,
		Footer,
	},
	mounted() {
		useHead({
			bodyAttrs: {
				class: 'project-template'
			},
		})
	}
};
</script>

<style lang="scss">
.project-template {
	background: $maingrey;

	.container {
		@include tablet {
			max-width: 1060px;
		}
	}
}
</style>
