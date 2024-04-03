<template>
	<header class="header" id="header">
		<div class="header__inner">
			<Logo />
			<BaseNav />
		</div>
	</header>
</template>

<script>
import Logo from '~/components/Logo.vue';
import BaseNav from '~/components/BaseNav.vue';

export default {
	components: {
		Logo,
		BaseNav,
	}
};
</script>

<style lang="scss">
.header {
    position: relative;
    z-index: 999;
    padding: rem(30px) rem(25px);

    @include tablet {
        padding: rem(30px) rem(65px);
    }

    &__inner {
        @include tablet {
            display: flex;
            justify-content: space-between;
        }
    }

    &__logo {
        text-transform: uppercase;
        font-size: rem(12px);
        font-weight: 400;
        line-height: rem(16px);
        letter-spacing: 0.14em;
        font-family: 'Suisse Int`l', sans-serif;
    }
}
</style>
  