<template>
	<div>
		<div class="loader">
			<div class="lds-dual-ring"></div>
		</div>

		<div v-for="block in blocks">
			<project-intro v-if="block.acf_fc_layout == 'flexible_custom_intro'" 
				:title=block.title 
				:skills=block.skills
				:htmlText=block.intro />

			<project-img v-if="block.acf_fc_layout == 'flexible_custom_image'" 
				:imgSrc=block.image.url
				:imgAlt=block.image.alt
				:imgSrcMobile=block.image_mobile.url
				:imgAltMobile=block.image_mobile.alt
				:mobileWidth=block.width_mobile
				:desktopWidth=block.width_desktop
				:marginTop=block.margin_top
				:alignment=block.alignment
				:noPadding=block.no_padding
				:caption=block.caption
				:loading=eager />

			<project-subtitle v-if="block.acf_fc_layout == 'flexible_custom_subtitle'" 
				:text=block.subtitle />

			<project-paragraph v-if="block.acf_fc_layout == 'flexible_custom_paragraph'" 
				:htmlText=block.paragraph
				:marginTop=block.margin_top
				:isShrink=block.is_shrink
				:isCentered=block.is_centered />

			<project-blockquote v-if="block.acf_fc_layout == 'flexible_custom_blockquote'" 
				:quote=block.quote 
				:author=block.author
				:cite=block.cite
				:isShrink=block.is_shrink
				:isCentered=block.is_centered />

			<project-paragraph-img v-if="block.acf_fc_layout == 'flexible_custom_paragraph-img'" 
				:htmlText=block.paragraph
				:imgSrc=block.image.url
				:imgAlt=block.image.alt
				:marginTop=block.margin_top
				caption=block.caption
				:isCentered=block.is_centered
				loading="lazy" />

			<project-video v-if="block.acf_fc_layout == 'flexible_custom_video'" 
				:videoSrc=block.video.url
				:marginTop=block.margin_top
				:alignment=block.alignment
				:noPadding=block.no_padding
				:caption=block.caption />

			<project-audio v-if="block.acf_fc_layout == 'flexible_custom_audio'" 
				:audioSrc01=block.audio_01.url
				:audioTitle01=block.audio_title_01
				:audioSrc02=block.audio_02.url
				:audioTitle02=block.audio_title_02 />

			<project-link v-if="block.acf_fc_layout == 'flexible_custom_link'" 
				:linkSrc=block.link.url
				:linkTitle=block.link.title
				:alignment=block.alignment />
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
				this.blocks = response.data[0].acf.flexible

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