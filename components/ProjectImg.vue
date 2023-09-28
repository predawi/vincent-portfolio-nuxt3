<template>
    <section class="project-img" :style="[marginTop ? {'margin-top': marginTop} : '']">
        <div class="container">

            <figure class="project-img__figure" :class="
                [alignment ? ' project-img__figure--' + alignment : ''] +
                [imgSrcMobile ? ' desktop-only' : ''] +
                [noPadding === 'true' ? ' project-img__figure--no-padding' : '']">

                <img 
                    :src="imgSrc" 
                    :alt="imgAlt"
                    :style="imgWidth"
                    class="project-img__picture" />
                    <figcaption v-if="caption" class="project-img__caption">{{ caption }}</figcaption>
            </figure>

            <figure :if="imgSrcMobile" class="project-img__figure mobile-only" :class="
                [alignment ? ' project-img__figure--' + alignment : ''] +
                [noPadding === 'true' ? ' project-img__figure--no-padding' : '']">
                <img 
                    :src="imgSrcMobile" 
                    :alt="imgAltMobile"
                    class="project-img__picture" />
                    <figcaption v-if="caption" class="project-img__caption">{{ caption }}</figcaption>
            </figure>

        </div>
    </section>
</template>

<script>
export default {
    name: 'project-img',
    props: ['imgSrc', 'imgAlt', 'imgSrcMobile', 'imgAltMobile', 'mobileWidth', 'desktopWidth', 'caption', 'marginTop', 'alignment', 'noPadding'],
    data() {
        return {
            imgWidth: 'desktop-sidebar',
        };
    },
    mounted() {
        this.initMobileWidth = this.mobileWidth ? this.mobileWidth : '100%';
        this.initDesktopWidth = this.desktopWidth ? this.desktopWidth : '100%';
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
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

    &__caption {
        margin-top: rem(10px);
        line-height: rem(17px);
        font-size: rem(10px);
        text-align: right;
    }
}
</style>
