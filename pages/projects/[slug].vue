<template>
	<div>

		<Head>
			<Title>{{ title }}</Title>
		</Head>

		<div class="loader-wrapper"><span class="loader"></span></div>

		<div v-for="(block, index) in blocks">
			<project-intro v-if="block.acf_fc_layout == 'flexible_custom_intro'" :title=block.title :skills=block.skills
				:htmlText=block.intro />

			<project-img v-if="block.acf_fc_layout == 'flexible_custom_image'" :img=block.image
				:imgMobile=block.image_mobile :mobileWidth=block.width_mobile :desktopWidth=block.width_desktop
				:marginTop=block.margin_top :alignment=block.alignment :noPadding=block.no_padding
				:caption=block.caption :loading="index < 2 ? 'eager' : 'lazy'" />

			<project-subtitle v-if="block.acf_fc_layout == 'flexible_custom_subtitle'" :text=block.subtitle />

			<project-paragraph v-if="block.acf_fc_layout == 'flexible_custom_paragraph'" :htmlText=block.paragraph
				:marginTop=block.margin_top :isShrink=block.is_shrink :isCentered=block.is_centered />

			<project-paragraph-small v-if="block.acf_fc_layout == 'flexible_custom_paragraph_small'"
				:htmlText=block.paragraph :marginTop=block.margin_top :isShrink=block.is_shrink
				:isCentered=block.is_centered />

			<project-blockquote v-if="block.acf_fc_layout == 'flexible_custom_blockquote'" :quote=block.quote
				:author=block.author :cite=block.cite :isShrink=block.is_shrink :isCentered=block.is_centered />

			<project-paragraph-img v-if="block.acf_fc_layout == 'flexible_custom_paragraph-img'"
				:htmlText=block.paragraph :imgSrc=block.image.url :imgAlt=block.image.alt :marginTop=block.margin_top
				caption=block.caption :isCentered=block.is_centered :loading="index < 2 ? 'eager' : 'lazy'" />

			<project-video v-if="block.acf_fc_layout == 'flexible_custom_video'" :videoSrc=block.video.url
				:marginTop=block.margin_top :alignment=block.alignment :noPadding=block.no_padding
				:caption=block.caption />

			<project-audio v-if="block.acf_fc_layout == 'flexible_custom_audio'" :audioSrc01=block.audio_01.url
				:audioTitle01=block.audio_title_01 :audioSrc02=block.audio_02.url :audioTitle02=block.audio_title_02 />

			<project-link v-if="block.acf_fc_layout == 'flexible_custom_link'" :linkSrc=block.link.url
				:linkTitle=block.link.title :alignment=block.alignment />
		</div>

		<ProjectNav />

		<Footer />
	</div>
</template>

<script>
import axios from 'axios';

import ProjectIntro from '~/components/project/ProjectIntro.vue';
import ProjectImg from '~/components/project/ProjectImg.vue';
import ProjectSubtitle from '~/components/project/ProjectSubtitle.vue';
import ProjectParagraph from '~/components/project/ProjectParagraph.vue';
import ProjectParagraphSmall from '~/components/project/ProjectParagraphSmall.vue';
import ProjectParagraphImg from '~/components/project/ProjectParagraphImg.vue';
import ProjectBlockquote from '~/components/project/ProjectBlockquote.vue';
import ProjectVideo from '~/components/project/ProjectVideo.vue';
import ProjectAudio from '~/components/project/ProjectAudio.vue';
import ProjectLink from '~/components/project/ProjectLink.vue';

import ProjectNav from '~/components/ProjectNav.vue';

definePageMeta({ layout: 'project', title: 'My App', })

export default {
	components: {
		ProjectIntro,
		ProjectImg,
		ProjectSubtitle,
		ProjectParagraph,
		ProjectParagraphSmall,
		ProjectParagraphImg,
		ProjectBlockquote,
		ProjectNav,
		ProjectLink,
	},
	data() {
		return {
			title: '',
			blocks: []
		};
	},
	mounted() {
		const config = useRuntimeConfig()

		axios.get(config.public.BACK_OFFICE_URL + 'project?slug=' + this.$route.params.slug)
			.then(response => {
				this.title = response.data[0].title.rendered
				this.blocks = response.data[0].acf.flexible

				document.querySelector('.loader-wrapper').classList.add('hidden')
				setTimeout(() => {
					document.querySelector('.loader-wrapper').classList.add('remove')
				}, 300);
			});
	}
}
</script>

<style lang="scss">
.loader {
	position: relative;
	width: 48px;
	height: 48px;

	&-wrapper {
		position: fixed;
		z-index: 999;
		width: 100%;
		height: 100%;
		background: $maingrey;
		opacity: 1;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity ease-in-out .3s;

		&.hidden {
			opacity: 0;
		}

		&.remove {
			z-index: -999;
		}
	}
}

.loader::after,
.loader::before {
	content: '';
	box-sizing: border-box;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	border: 1px solid $secondary;
	position: absolute;
	left: 0;
	top: 0;
	animation: animloader 2s linear infinite;
}

.loader::after {
	animation-delay: 1s;
}

@keyframes animloader {
	0% {
		transform: scale(1);
		opacity: 1;
	}

	100% {
		transform: scale(0);
		opacity: 0;
	}
}
</style>