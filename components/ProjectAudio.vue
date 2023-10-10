<template>
    <div class="container">
        <div class="typo-p project-audio"
            :class="[isSmall ? 'project-audio--small' : ''] +
                    [isCentered ? ' project-audio--centered' : '']
        ">

            <div class="d-md-flex">

                <project-audio-item v-if=audioSrc01 
                    :audioSrc=audioSrc01
                    :audioTitle=audioTitle01
                    id="audio01"
                />
                <project-audio-item v-if=audioSrc02
                    :audioSrc=audioSrc02
                    :audioTitle=audioTitle02
                    id="audio02"
                />

            </div>
           
        </div>
    </div>
</template>

<script>
import ProjectAudioItem from '~/components/ProjectAudioItem.vue'

export default {
    name: 'project-audio',
    props: ['audioSrc01', 'audioTitle01', 'audioSrc02', 'audioTitle02', 'isSmall', 'isCentered'],
    components: {
		ProjectAudioItem,
  	},
    mounted() {
        let audioTriggers = document.querySelectorAll('.js-audio-trigger');

        audioTriggers.forEach(function(trigger) {
            trigger.addEventListener('click', function(e) {
                let target = this.getAttribute('data-target');

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
}
</style>
