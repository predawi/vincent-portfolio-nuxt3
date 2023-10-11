<template>
    <div class="project-nav">
        <NuxtLink :to="'/projects/' + link" class="project-card__link">
            <div class="project-card__infos">
                <h3 class="project-card__title">{{ title }}</h3>
                <span v-if="category" class="typo-category project-card__category">{{ category }}</span>
            </div>
            <div class="project-nav__description" v-html="description"></div>
        </NuxtLink>
    </div>
</template>

<script>
export default {
name: 'project-nav',
props: ['link', 'title', 'category', 'description'],
}
</script>

<style lang="scss">
.project-nav {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex: auto;
    height: rem(215px);
    margin: rem(100px) rem(24px) 0;
    border: 1px solid $textcolor;
    background: $maingrey;

    @include tablet {
        flex: 0 0 50%;
        height: rem(300px);
        margin: rem(140px) 0 0;
    }

    &:hover,
    &:focus {
        .project-nav__description {
            opacity: 1;
        }
    }

    &:first-child {
        display: none;

        @include tablet {
            display: flex;
            border-left: none;
        }
    }

    &:last-child {
        @include tablet {
            border-left: none;
            border-right: none;
        }
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
