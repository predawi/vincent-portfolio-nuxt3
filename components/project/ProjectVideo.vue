<template>
    <section class="project-video" :style="[marginTop ? {'margin-top': marginTop} : '']">
        <div class="container project-video__container">

            <figure v-if="videoSrc" class="project-video__figure" :class="
                [alignment ? ' project-video__figure--' + alignment : ''] +
                [noPadding === 1 ? ' project-video__figure--no-padding' : '']">

                <video controls class="project-video__video" preload="none">
                    <source :src="videoSrc" type="video/mp4" />
                </video>
                <figcaption v-if="caption" class="caption project-video__caption">{{ caption }}</figcaption>
            </figure>

        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'project-video',
    props: ['videoId', 'caption', 'marginTop', 'alignment', 'noPadding'],
    data() {
        return {
            videoSrc: false,
        };
    },
    mounted() {
        const config = useRuntimeConfig()

        if(this.videoId) {
            axios.get(config.public.BACK_OFFICE_URL + 'media/' + this.videoId)
                .then(response => {
                    this.videoSrc = response.data.source_url
                });
        }
    },
}
</script>

<style lang="scss">
.project-video {
    margin-top: rem(70px);
    overflow-x: hidden;

    &__container {
        max-width: 896px !important;
    }

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

                .project-video__caption {
                    margin: rem(10px) rem(25px) 0;
                }
            }
        }
    }

    &__video {
        display: block;
        height: auto;
        width: 100%;

        @include tablet {
            max-width: 100%;
        }
    }
}
</style>
