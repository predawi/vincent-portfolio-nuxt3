<template>
    <section class="passion">
        
        <div class="passion__container">
            <h1 class="typo-t2 passion__title">Passion</h1>

            <p class="typo-p passion__description">I’m a musician and producer of music since 15 years, I had the chance to showcase my work for art exhibition, ballets, radio shows, festivals and to produce sound designs for brands</p>

            <a href="https://open.spotify.com/intl-fr/artist/6JR4xDvb36OrgAAUJqgABk" class="passion__cta" target="_blank">
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
    margin-bottom: rem(50px);

    @include tablet {
        margin-top: rem(150px);
        margin-bottom: rem(100px);
    }

    &__container {
        position: relative;
        margin: auto;
        padding: 0 rem(77px);

        @include tablet {
            max-width: 620px;
            padding: 0 rem(146px);
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
        margin-top: rem(48px);

        @include tablet {
            margin-top: rem(96px);
        }
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
