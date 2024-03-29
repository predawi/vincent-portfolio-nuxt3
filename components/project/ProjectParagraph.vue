<template>
    <div class="container">
        <div class="typo-p project-paragraph" 
            v-html="htmlText" 
            :style="[marginTop ? {'margin-top': marginTop} : '']"
            :class="[isShrink === 1 ? 'project-paragraph--shrink' : ''] +
                    [isCentered === 1 ? ' project-paragraph--centered' : '']
        ">
        </div>
    </div>
</template>

<script>
export default {
    name: 'project-paragraph',
    props: ['htmlText', 'isShrink', 'isCentered', 'marginTop'],
}
</script>

<style lang="scss">
.project-paragraph {
    margin: rem(70px) 0 0;

    @include tablet {
        max-width: 584px;
        margin: rem(70px) 0 0 rem(100px);
    }

    &--shrink {
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
}
</style>
