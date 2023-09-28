<template>
    <div class="container">
        <blockquote class="project-blockquote" :class="
                    [isSmall ? 'project-blockquote--small' : ''] +
                    [isCentered ? ' project-blockquote--centered' : '']">
            <p>{{ quote }}</p>
            <footer>{{ author }} <cite>{{ cite }}</cite></footer>
        </blockquote>
    </div>
</template>

<script>
export default {
    name: 'project-blockquote',
    props: ['quote', 'author', 'cite', 'isSmall', 'isCentered'],
}
</script>

<style lang="scss">
.project-blockquote {
    margin: rem(70px) 0 0;
    text-align: right;
    font-family: 'Canela', sans-serif;

    @include tablet {
        max-width: 584px;
        margin: rem(55px) 0 0 rem(100px);
    }

    &--small {
        @include tablet {
            max-width: 460px;
        }
    }

    &--centered {
        @include tablet {
            margin-left: auto;
            margin-right: auto;
        }
    }

    p {
        margin: 0;
        line-height: rem(58px);
        font-size: rem(67px);

        @include tablet {
            line-height: rem(44px);
            font-size: rem(37px);
        }
    }

    footer {
        margin-top: rem(16px);
        line-height: rem(21px);
        font-size: rem(12px);

        @include tablet {
            font-size: rem(16px);
        }
    }
}
</style>
