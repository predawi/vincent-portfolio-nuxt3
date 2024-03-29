<template>
    <section class="project-img" :style="[marginTop ? {'margin-top': marginTop} : '']">
        <div class="container">

            <figure v-if="imgSrc" class="project-img__figure" :class="
                [alignment ? ' project-img__figure--' + alignment : ''] +
                [imgSrcMobile ? ' desktop-only' : ''] +
                [noPadding === 1 ? ' project-img__figure--no-padding' : '']">

                <img 
                    :src="imgSrc"
                    :alt="imgAlt"
                    :style="imgWidth"
                    class="project-img__picture" :loading="loading" />
                    <figcaption v-if="caption" class="caption project-img__caption">{{ caption }}</figcaption>
            </figure>

            <figure v-if="imgSrcMobile" class="project-img__figure mobile-only" :class="
                [alignment ? ' project-img__figure--' + alignment : ''] +
                [noPadding === 1 ? ' project-img__figure--no-padding' : '']">
                <img 
                    :src="imgSrcMobile" 
                    :alt="imgAltMobile"
                    class="project-img__picture" :loading="loading" />
                    <figcaption v-if="caption" class="caption project-img__caption">{{ caption }}</figcaption>
            </figure>

        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'project-img',
    props: ['imgId', 'imgAlt', 'imgIdMobile', 'imgAltMobile', 'mobileWidth', 'desktopWidth', 'caption', 'marginTop', 'alignment', 'noPadding' ,'loading'],
    data() {
        return {
            imgWidth: 'desktop-sidebar',
            imgSrc: false,
            imgSrcMobile: false,
            imgAlt: "",
            imgAltMobile: "",
        };
    },
    mounted() {
        this.initMobileWidth = this.mobileWidth ? this.mobileWidth : '100%';
        this.initDesktopWidth = this.desktopWidth ? this.desktopWidth : '100%';
        this.handleResize();
        window.addEventListener('resize', this.handleResize);

        const config = useRuntimeConfig()

        if (this.imgId) {
            axios.get(config.public.BACK_OFFICE_URL + 'media/' + this.imgId)
                .then(response => {
                    this.imgSrc = response.data.source_url
                    this.imgAlt = response.data.alt_text
                });
        }

        if (this.imgIdMobile) {
            axios.get(config.public.BACK_OFFICE_URL + 'media/' + this.imgIdMobile)
                .then(response => {
                    this.imgSrcMobile = response.data.source_url
                    this.imgAltMobile = response.data.alt_text
                });
        }
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.imgWidth = window.matchMedia('(max-width: 820px)').matches ? {'width': this.initMobileWidth} : {'width': this.initDesktopWidth};
        }
    }
}
</script>

<style lang="scss">
.project-img {
    margin-top: rem(70px);
    overflow-x: hidden;

    &__figure {
        display: flex;
        flex-flow: column;
        margin: 0;

        &--right {
            @include tablet {
                align-items: flex-end;
            }
        }

        &--center {
            @include tablet {
                align-items: center;
            }
        }

        &--no-padding {
            @include mobile {
                margin: 0 rem(-25px);

                .project-img__caption {
                    margin: rem(10px) rem(25px) 0;
                }
            }
        }
    }

    &__picture {
        display: block;
        height: auto;
        width: 100%;

        @include tablet {
            max-width: 100%;
        }
    }
}
</style>
