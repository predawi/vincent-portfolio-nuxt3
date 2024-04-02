<template>
    <div class="container">
        <div class="typo-p typo-p--small project-paragraph-small" 
            v-html="htmlText" 
            :style="[marginTop ? {'margin-top': marginTop} : '']"
            :class="[isShrink ? 'project-paragraph-small--shrink' : ''] +
                    [isCentered ? ' project-paragraph-small--centered' : '']
        ">
        </div>
    </div>
</template>

<script>
export default {
    name: 'project-paragraph-small',
    props: ['htmlText', 'isShrink', 'isCentered', 'marginTop'],
}
</script>

<style lang="scss">
.project-paragraph-small {
    margin: rem(70px) 0 0;

    @include tablet {
        max-width: 460px;
        margin: rem(70px) 0 0 rem(100px);
    }

    &--shrink {
        @include tablet {
            max-width: 413px;
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
