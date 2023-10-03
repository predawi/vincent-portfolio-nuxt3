<template>
    <section class="about-me">
        <div class="about-me__bg">
            <svg xmlns="http://www.w3.org/2000/svg" width="846" height="1030" fill="none"><path fill="#252525" d="M590 67.293c-203.2-141.2-417 11.5-498.5 105.5l-91.5 517c46.5 142.5 206.3 406.897 473.5 324.497C740.7 931.893 833.167 641.627 846 506.793c-.667-87.666-52.8-298.3-256-439.5Z"/><path fill="#282828" d="M541.501 256.421c-68.5-310-418.333-279.334-541.5-212.5v537.5l374.8 139.211c56.041 20.815 119.707-2.365 146.404-55.853 63.437-127.094 89.863-230.984 20.296-408.358Z"/></svg>
        </div>

        <div class="container about-me__container">
            <h1 class="typo-t1 about-me__title">About me</h1>

            <img src="/about-me.png" class="typo-t1 about-me__picture" alt="">

            <p class="typo-p about-me__description">I’m a Senior Product designer, CX designer, UX & UI designer. I work on digital strategy, immersive experiences and on conception of digital products for international companies and agencies</p>

            <div class="about-me__star"><svg xmlns="http://www.w3.org/2000/svg" width="131" height="130" fill="none"><path stroke="#FBF8F3" d="m37.27 6.537 57.347 117.58M54.766.913l22.717 128.833M76.498.913 53.78 129.746M98.315 8.521l-65.41 113.293M23.236 15.57l84.09 100.214M1.255 77.48l128.832-22.716M9.191 98.577l113.294-65.41M20.51 112.838l90.875-94.104M121.809 98.577 8.515 33.166M129.745 77.481.913 54.764"/></svg></div>
        </div>
    </section>
</template>

<script>
export default {
	name: 'AboutMe'
}
</script>

<style lang="scss">
.about-me {
    position: relative;
    margin-top: rem(30px);

    @include tablet {
        margin-top: rem(150px);
    }

    &__bg {
        position: absolute;
        z-index: -1;
        top: rem(-100px);
        left: 0;
        
        svg {
            max-width: 100%;
        }
    }

    &__container.container {
        position: relative;

        @include tablet {
            max-width: 620px;
            padding: 0;
        }  
    }

    &__picture {
        display: block;
        max-width: 220px;
        margin: rem(50px) auto 0;

        @include tablet {
            position: absolute;
            top: rem(-70px);
            right: rem(-200px);
            margin-top: 0;
        }
    }

    &__description {
        margin-top: rem(50px);
        line-height: rem(32px);
        font-size: rem(25px);

        @include tablet {
            margin-top: rem(70px);
            line-height: rem(44px);
            font-size: rem(34px);
        }
    }

    &__star {
        margin-top: rem(74px);
        text-align: center;

        @include tablet {
            margin-top: rem(114px);
        }
    }
}
</style>
