<template>
    <section class="project-paragraph-small">
        <div class="container">
            <div class="typo-p project-paragraph-small__content" v-html="htmlText"></div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'project-paragraph-small',
    props: ['htmlText'],
}
</script>

<style lang="scss">
.project-paragraph-small {
    &__content {
        margin: rem(70px) 0 0;

        @include tablet {
            max-width: 413px;
            margin: rem(70px) 0 0 rem(100px);
        }
    }
}
</style>
