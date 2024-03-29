<template>
	<div>
		<div class="loader">
			<div class="lds-dual-ring"></div>
		</div>

		<div v-for="block in blocks">
			<project-intro v-if="block.blockName == 'acf/intro'" 
				:title=block.attrs.data.title 
				:skills=block.attrs.data.skills
				:htmlText=block.attrs.data.intro />

			<project-img v-if="block.blockName == 'acf/image'" 
				:imgId=block.attrs.data.image
				:imgIdMobile=block.attrs.data.image_mobile
				:mobileWidth=block.attrs.data.width_mobile
				:desktopWidth=block.attrs.data.width_desktop
				:marginTop=block.attrs.data.margin_top
				:alignment=block.attrs.data.alignment
				:noPadding=block.attrs.data.no_padding
				:caption=block.attrs.data.caption
				:loading=eager />

			<project-subtitle v-if="block.blockName == 'acf/subtitle'" 
				:text=block.attrs.data.subtitle />

			<project-paragraph v-if="block.blockName == 'acf/paragraph'" 
				:htmlText=block.attrs.data.paragraph
				:marginTop=block.attrs.data.margin_top
				:isShrink=block.attrs.data.is_shrink
				:isCentered=block.attrs.data.is_centered />

			<project-blockquote v-if="block.blockName == 'acf/blockquote'" 
				:quote=block.attrs.data.quote 
				:author=block.attrs.data.author
				:cite=block.attrs.data.cite
				:isShrink=block.attrs.data.is_shrink
				:isCentered=block.attrs.data.is_centered />

			<project-paragraph-img v-if="block.blockName == 'acf/paragraph-img'" 
				:htmlText=block.attrs.data.paragraph
				:imgId=block.attrs.data.image
				imgAlt="Anoti image 01"
				:marginTop=block.attrs.data.margin_top
				caption=block.attrs.data.caption
				:isCentered=block.attrs.data.is_centered
				loading="lazy" />

			<project-video v-if="block.blockName == 'acf/video'" 
				:videoId=block.attrs.data.video
				:marginTop=block.attrs.data.margin_top
				:alignment=block.attrs.data.alignment
				:noPadding=block.attrs.data.no_padding
				:caption=block.attrs.data.caption />

			<project-audio v-if="block.blockName == 'acf/audio'" 
				:audioId01=block.attrs.data.audio_01
				:audioTitle01=block.attrs.data.audio_title_01
				:audioId02=block.attrs.data.audio_02
				:audioTitle02=block.attrs.data.audio_title_02 />

			<project-link v-if="block.blockName == 'acf/link'" 
				:linkSrc=block.attrs.data.link.url
				:linkTitle=block.attrs.data.link.title
				:alignment=block.attrs.data.alignment />
		</div>

		<ProjectNav />
	</div>
</template>

<script>
import axios from 'axios';

import ProjectIntro from '~/components/project/ProjectIntro.vue';
import ProjectImg from '~/components/project/ProjectImg.vue';
import ProjectSubtitle from '~/components/project/ProjectSubtitle.vue';
import ProjectParagraph from '~/components/project/ProjectParagraph.vue';
import ProjectParagraphImg from '~/components/project/ProjectParagraphImg.vue';
import ProjectBlockquote from '~/components/project/ProjectBlockquote.vue';
import ProjectVideo from '~/components/project/ProjectVideo.vue';
import ProjectAudio from '~/components/project/ProjectAudio.vue';
import ProjectLink from '~/components/project/ProjectLink.vue';

import ProjectNav from '~/components/ProjectNav.vue';

definePageMeta({ layout: 'project' })

export default {
	name: 'Anoti',
	components: {
		ProjectIntro,
		ProjectImg,
		ProjectSubtitle,
		ProjectParagraph,
		ProjectParagraphImg,
		ProjectBlockquote,
		ProjectNav,
		ProjectLink,
	},
	meta() {
		return {
			title: 'Anoti'
		}
	},
	data() {
		return {
			blocks: ''
		};
	},
	mounted() {
		const config = useRuntimeConfig()

		axios.get(config.public.BACK_OFFICE_URL + 'project?slug=' + this.$route.params.slug)
			.then(response => {
				this.blocks = response.data[0].blocks

				document.querySelector('.loader').classList.add('hidden')
				setTimeout(() => {
					document.querySelector('.loader').classList.add('remove')
				}, 300);
			});
	}
}
</script>

<style lang="scss">
.loader {
	position: fixed;
	z-index: 1;
	width: 100%;
	height: 100%;
	background: gray;
	opacity: 1;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all .3s ease-in-out;

	&.hidden {
		opacity: 0;
	}

	&.remove {
		z-index: -999;
	}
}

.lds-dual-ring {
	display: inline-block;
	width: 80px;
	height: 80px;
}

.lds-dual-ring:after {
	content: " ";
	display: block;
	width: 64px;
	height: 64px;
	margin: 8px;
	border-radius: 50%;
	border: 6px solid #fff;
	border-color: #fff transparent #fff transparent;
	animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>