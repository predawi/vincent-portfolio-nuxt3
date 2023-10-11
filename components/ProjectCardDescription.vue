<template>
    <div class="project-card__description" v-html="description"></div>
</template>

<script>
export default {
    name: 'project-card-description',
    props: ['description'],
}
</script>

<style lang="scss">
.project-card {
    &__description {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: rem(50px);
        line-height: rem(36px);
        font-size: rem(18px);
        font-family: 'Canela';
        background: $blackcolor;
        color: $maincolor;
        text-align: center;
        opacity: 0;
        transition: opacity .5s ease-out;

        @include mobile {
            display: none;
        }
    }
}
</style>
