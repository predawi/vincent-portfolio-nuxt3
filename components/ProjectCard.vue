<template>
    <div class="project-card">
        <NuxtLink :to="'/projects/' + link" class="project-card__link">
            <div class="project-card__infos">
                <h3 class="project-card__title">{{ title }}</h3>
                <span v-if="category" class="typo-category project-card__category">{{ category }}</span>
            </div>

            <div class="project-card__description" v-html="description"></div>
        </NuxtLink>
    </div>
</template>

<script>
export default {
name: 'project-card',
props: ['link', 'title', 'category', 'description'],
}
</script>

<style lang="scss">
.project-card {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    height: rem(215px);
    margin-top: rem(30px);
    border: 1px solid $textcolor;
    background: $maincolor;

    @include tablet {
        height: rem(300px);
        margin-top: rem(20px);
    }

    &:hover,
    &:focus {
        .project-card__description {
            opacity: 1;
        }
    }

    &__link {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        padding: rem(30px);
    }

    &__infos {
        text-align: right;
    }

    &__title {
        margin: 0;
        line-height: rem(28px);
        font-size: rem(24px);
        font-weight: 300;
        font-family: 'Canela', sans-serif;
    }

    &__category {
        display: block;
        margin-top: rem(10px);
        text-transform: uppercase;
        font-size: rem(12px);
        letter-spacing: 0.07em;
        font-family: 'Suisse Int`l', sans-serif;
    }

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
