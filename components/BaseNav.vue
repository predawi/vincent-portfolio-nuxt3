<template>
	<div>
		<nav id="nav" :class="{ 'nav nav--open': isToggled, 'nav nav--close': !isToggled }">
			<div class="nav__inner">
				<div id="burger" @click="isToggled = !isToggled">
					<button class="nav__button">Menu</button>
				</div>

				<ul class="nav__list">
					<li class="nav__list-item">
						<NuxtLink to="/"><span>Home/</span><span>Work</span></NuxtLink>
					</li>
					<li class="nav__list-item">
						<NuxtLink to="/about">About</NuxtLink>
					</li>
					<li class="nav__list-item">
						<NuxtLink to="/contact">Contact</NuxtLink>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	data: function () {
		return {
			isToggled: false,
		}
	}
};
</script>

<style lang="scss">
.nav {
    position: absolute;
    z-index: 998;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: $blackcolor;
    overflow: hidden;
    transition: height 1s $expoInOut;

    @include tablet {
        position: relative;
        width: auto;
        height: auto;
        background: none;
    }

    &.nav--open {
        height: 100vh;
    }

    &__inner {
        padding-top: rem(100px);

        @include tablet {
            padding: 0;
        }
    }

    &__button {
        position: fixed;
        z-index: 999;
        top: rem(30px);
        right: rem(36px);
        font-size: rem(12px);
        font-weight: 450;
        line-height: rem(16px);
        letter-spacing: 0.14em;
        text-transform: uppercase;
        font-family: 'Suisse Int`l', sans-serif;

        @include tablet {
            display: none;
        }

        .nav--open & {
            color: $lightcolor;
        }
    }

    &__list {
        padding-left: rem(38px);

        @include tablet {
            display: flex;
        }
    }

    &__list-item {
        margin-bottom: 10vh;
        text-transform: uppercase;
        font-family: Canela;
        font-size: rem(64px);
        font-weight: 300;
        line-height: rem(77px);
        word-break: break-word;
        font-family: 'Canela', sans-serif;

        @include tablet {
            margin-left: rem(38px);
            margin-bottom: 0;
            font-size: rem(12px);
            font-weight: 450;
            line-height: rem(16px);
            letter-spacing: 0.14em;
            font-family: 'Suisse Int`l', sans-serif;
        }

        a {
            display: flex;
            flex-wrap: wrap;
            color: $lightcolor;

            @include tablet {
                color: $textcolor;
            }
        }
    }
}
</style>