<template>
    <div class="container">
        <div class="project-paragraph-img"
            :style="[marginTop ? {'margin-top': marginTop} : '']"
            :class="[isCentered === 1 ? ' project-paragraph-img--centered' : '']">
            <div class="typo-p"
                v-html="htmlText">
            </div>

            <figure class="project-paragraph-img__figure">
                <img 
                    :src="imgSrc" 
                    :alt="imgAlt"
                    class="project-paragraph-img__picture" :loading=loading />
                    <figcaption v-if="caption" class="caption project-paragraph-img__caption">{{ caption }}</figcaption>
            </figure>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'project-paragraph-img',
    props: ['htmlText', 'isCentered', 'imgId', 'imgAlt', 'caption', 'marginTop', 'loading'],
    data() {
        return {
            imgSrc: false,
            imgAlt: "",
        };
    },
    mounted() {
        const config = useRuntimeConfig()

        if(this.imgId) {
            axios.get(config.public.BACK_OFFICE_URL + 'media/' + this.imgId)
                .then(response => {
                    this.imgSrc = response.data.source_url
                    this.imgAlt = response.data.alt_text
                });
        }
    }
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
}
</style>
