<script setup>
useHead({
	bodyAttrs: {
		class: 'default-template'
	},
})
</script>

<template>
	<div>
		<HeaderBanner />
		<slot />
		<Footer />
	</div>
</template>

<script>
import Footer from '~/components/Footer.vue';
import HeaderBanner from '~/components/HeaderBanner.vue';

export default {
	components: {
		HeaderBanner,
		Footer,
	}
};
</script>

<style lang="scss">
.default-template {
	transition: background-color .5s ease-out;
}
</style>