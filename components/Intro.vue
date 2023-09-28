<template>
    <section class="intro">
        <div class="intro__bg">
            <svg xmlns="http://www.w3.org/2000/svg" width="941" height="995" fill="none"><path fill="#F8F3EC" d="M855.709 601.293c-503.2 117.2-706.666-28.833-745.5-116.5-83.166 46.5-199.6 177.5 0 329.5s491.834 83 613 29.5c253.834-129.667 635.701-359.7 132.5-242.5Z"/><path fill="#FBF8F3" d="M528.709 32.293c203.2-141.2 417 11.5 498.501 105.5l91.5 517c-46.5 142.5-206.301 406.897-473.501 324.5-267.2-82.4-359.666-372.666-372.5-507.5.667-87.666 52.8-298.3 256-439.5Z"/><path fill="#FAF5ED" d="M495.23 406.421c68.499-310 418.333-279.334 541.5-212.5v537.5L661.929 870.632c-56.04 20.815-119.706-2.365-146.404-55.853-63.437-127.094-89.863-230.984-20.295-408.358Z"/><path fill="#FFFDFA" d="M514.709 349.793c-150-54.8-74.5-257.5-18-352h201c1.5 140.167-33 406.8-183 352Z"/></svg>
        </div>

        <div class="container">
            <h1 class="typo-t1 intro__title">Experience <br>designer</h1>

            <p class="typo-p">I am a freelance senior product designer. I help companies and agencies worldwide to think, design and create innovative digital and phygital experiences</p>

            <p class="typo-p">I’m aiming to build meaningful user and customer experiences which explore the endless creative possibilities that a digital medium offers. I enjoy working on finding the perfect combination of Creativity, Strategy & Experience</p>

            <NuxtLink to="/about" class="typo-link intro__link">Find out more</NuxtLink>
        </div>
    </section>
</template>

<style lang="scss">
.intro {
    margin-top: rem(30px);

    @include tablet {
        margin-top: rem(150px);
    }

    &__bg {
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        
        svg {
            max-width: 100%;
        }
    }

    &__title {
        @include tablet {
            margin-bottom: rem(50px);
        }
    }

    &__link {
        display: inline-block;

        @include tablet {
            margin-top: rem(50px);
        }
    }
}
</style>
