<template>
    <div class="container">
        <div class="project-paragraph-img"
            :class="[isCentered ? ' project-paragraph-img--centered' : '']">
            <div class="typo-p"
                v-html="htmlText">
            </div>

            <figure class="project-paragraph-img__figure">
                <img 
                    :src="imgSrc" 
                    :alt="imgAlt"
                    class="project-paragraph-img__picture" />
                    <figcaption v-if="caption" class="project-paragraph-img__caption">{{ caption }}</figcaption>
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    name: 'project-paragraph-img',
    props: ['htmlText', 'isCentered', 'imgSrc', 'imgAlt', 'caption'],
}
</script>

<style lang="scss">
.project-paragraph-img {
    margin: rem(70px) 0 0;

    @include tablet {
        display: flex;
        margin: rem(70px) 0 0 rem(100px);
    }

    &--centered {
        @include tablet {
            align-items: center;
        }
    }

    .typo-p {
        @include tablet {
            flex: auto;
            padding-right: rem(50px);
        }
    }

    &__figure {
        margin: rem(70px) 0 0 0;

        @include tablet {
            margin: 0;
            flex: 0 0 570px;
        }
    }

    &__picture {
        max-width: 100%;
    }

    &__caption {
        text-align: right;
    }
}
</style>
