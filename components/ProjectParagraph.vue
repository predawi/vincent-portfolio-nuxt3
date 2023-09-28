<template>
    <div class="container">
        <div class="typo-p project-paragraph" 
            v-html="htmlText" 
            :class="[isSmall ? 'project-paragraph--small' : ''] +
                    [isCentered ? ' project-paragraph--centered' : '']
        ">
        </div>
    </div>
</template>

<script>
export default {
    name: 'project-paragraph',
    props: ['htmlText', 'isSmall', 'isCentered'],
}
</script>

<style lang="scss">
.project-paragraph {
    margin: rem(70px) 0 0;

    @include tablet {
        max-width: 584px;
        margin: rem(70px) 0 0 rem(100px);
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
}
</style>
