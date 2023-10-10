<template>
    <div class="project-audio-item">
        <button class="project-audio-item__trigger js-audio-trigger"
            @click="isPlayed = !isPlayed"
            :class="{ 'play': isPlayed, '': !isPlayed }"
            :data-target="id">
            
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" fill="none" class="project-audio-item__play"><path fill="#fff" d="M11 7 .5 13.062V.938L11 7Z"/></svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="none" class="project-audio-item__pause"><path fill="#fff" fill-rule="evenodd" d="M5.333 19.629H0V.962h5.333V19.63Zm5.334 0V.962H16V19.63h-5.333Z" clip-rule="evenodd"/></svg>
        </button>

        {{ audioTitle }}

        <audio :id="id">
            <source :src="audioSrc" type="audio/mpeg">
        </audio>
    </div>
</template>

<script>
export default {
    name: 'project-audio-item',
    props: ['audioSrc', 'audioTitle', 'id'],
    data: function () {
		return {
			isPlayed: false,
		}
	},
}
</script>

<style lang="scss">
.project-audio-item {
    display: flex;
    align-items: center;
    margin-bottom: rem(35px);
    line-height: rem(21px);
    font-size: rem(16px);
    font-weight: 500;

    @include tablet {
        margin-right: rem(60px);
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
            .project-audio-item__play {
                display: none;
            }

            .project-audio-item__pause {
                display: block;
            }
        }
    }

    &__pause {
        display: none;
    }
}
</style>
