<template>
    <section class="passion">
        
        <div class="passion__container">
            <h1 class="typo-t2 passion__title">Passion</h1>

            <p class="typo-p passion__description">I’m a musician and producer of music since 15 years, I had the chance to showcase my work for art exhibition, radio shows, festivals and even for immersive digital experiences</p>

            <a href="https://open.spotify.com/intl-fr/artist/6JR4xDvb36OrgAAUJqgABk" class="passion__cta" target="_blank">
                <span class="passion__cta-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" fill="none"><path fill="#222" d="M11 7 .5 13.062V.938L11 7Z"/></svg>
                </span>
                <span class="passion__cta-text">Listen on Spotify</span>
            </a>
        </div>

    </section>
</template>

<script>
export default {
	name: 'AboutMePassion'
}
</script>

<style lang="scss">
.passion {
    position: relative;
    margin-top: rem(30px);

    @include tablet {
        margin-top: rem(150px);
    }

    &__container {
        position: relative;
        margin: auto;
        padding: 0 rem(77px);

        @include tablet {
            max-width: 620px;
            padding: 0 rem(146px);
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            top: 0;
            display: block;
            width: 42px;
            height: 100%;
            border: 1px solid $maincolor;

            @include tablet {
                width: 52px;
            }
        }

        &::before {
            left: 0;
        }
        
        &::after {
            right: 0;
        }
    }

    &__description {
        margin-top: rem(30px);
        line-height: rem(48px);
        font-size: rem(20px);
        font-family: 'Canela';

        @include tablet {
            line-height: rem(52px);
            font-size: rem(28px);
        }
    }

    &__cta {
        display: flex;
        align-items: center;
        color: #fff;
    }

    &__cta-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 57px;
        height: 57px;
        margin-right: rem(20px);
        border-radius: 50%;
        background: #fff;
    }

    &__cta-text {
        text-decoration: underline;
    }
}
</style>
