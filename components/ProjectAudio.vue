<template>
    <div class="container">
        <div class="typo-p project-audio"
            :class="[isSmall ? 'project-audio--small' : ''] +
                    [isCentered ? ' project-audio--centered' : '']
        ">

            <div class="d-md-flex">
                <div class="project-audio__item" v-if=audioSrc01>
                    <button class="project-audio__trigger js-audio-trigger" data-target="audio1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" fill="none" class="project-audio__play"><path fill="#fff" d="M11 7 .5 13.062V.938L11 7Z"/></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="none" class="project-audio__pause"><path fill="#fff" fill-rule="evenodd" d="M5.333 19.629H0V.962h5.333V19.63Zm5.334 0V.962H16V19.63h-5.333Z" clip-rule="evenodd"/></svg>
                    </button>
                    {{ audioTitle01 }}
                    <audio id="audio1">
                        <source :src="audioSrc01" type="audio/mpeg">
                    </audio>
                </div>

                <div class="project-audio__item" v-if=audioSrc02>
                    <button class="project-audio__trigger js-audio-trigger" data-target="audio1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" fill="none" class="project-audio__play"><path fill="#fff" d="M11 7 .5 13.062V.938L11 7Z"/></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="none" class="project-audio__pause"><path fill="#fff" fill-rule="evenodd" d="M5.333 19.629H0V.962h5.333V19.63Zm5.334 0V.962H16V19.63h-5.333Z" clip-rule="evenodd"/></svg>
                    </button>
                    {{ audioTitle02 }}
                    <audio id="audio1">
                        <source :src="audioSrc02" type="audio/mpeg">
                    </audio>
                </div>
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
    name: 'project-audio',
    props: ['audioSrc01', 'audioTitle01', 'audioSrc02', 'audioTitle02', 'isSmall', 'isCentered'],
    mounted() {
        let audioTriggers = document.querySelectorAll('.js-audio-trigger');

        audioTriggers.forEach(function(trigger) {
            trigger.addEventListener('click', function(e) {
                let target = this.getAttribute('data-target');

                this.classList.toggle('play');

                if (this.classList.contains('play')) 
                    document.getElementById(target).play()
                else
                    document.getElementById(target).pause()
            })
        })
    }
}
</script>

<style lang="scss">
.project-audio {
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

    &__item {
        display: flex;
        align-items: center;
        margin-bottom: rem(35px);
        line-height: rem(21px);
        font-size: rem(16px);
        font-weight: 500;

        @include tablet {
            margin-right: rem(60px);
        }
    }

    &__trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        width: 57px;
        height: 57px;
        margin-right: rem(20px);
        border-radius: 50%;
        background: $green;
        cursor: pointer;

        &.play {
            .project-audio__play {
                display: none;
            }

            .project-audio__pause {
                display: block;
            }
        }
    }

    &__pause {
        display: none;
    }
}
</style>
