<template>
	<div>
		<project-intro title="Anoti" skills="UX & UI"
			htmlText="I collaborated with Anoti, a startup tackling corporate compliance issues, to form their visual identity, and construct their primary website with the intent to attract customers. <br>The Saas platform is the tool they offer to businesses." />

		<project-img 
			imgSrc="/projects/anoti/anoti-01.png"
			imgAlt="Anoti image 01" 
			imgSrcMobile="/projects/anoti/anoti-01-mobile.png"
			imgAltMobile="Anoti image 01" 
			mobileWidth="530px" 
			desktopWidth="70%" 
			marginTop="70px" 
			alignment="right" 
			noPadding="false"
			caption="Workshop : “User needs // Served by”" />

		<project-subtitle text="Radical Solidarity" />

		<project-paragraph htmlText="<h3>Improving the subscription process</h3>
		<p>Humans currently extract Earth’s limited natural resources and distribute them unequally. Globally, we continue to consume more than we need to generate profits.</p>
		<p>Current economic systems en- courage the idea that nature is separate from us and is a free resource for us to exploit. Look deeper into the complex interactions of the natural world and begin to imagine a dif- ferent approach.</p>" />

		<project-paragraph htmlText="<small><p>Our data from the research phase showed that the subscription process on the website was underperforming because of :</p>
		<ul type='number'>
			<li>The lack of a responsive website</li>
			<li>The nature of the questions asked at each step of the process</li>
			<li>The number of steps (9)</li>
		</ul>
		</small>" isSmall="true" isCentered="true" />

		<project-blockquote quote="There are many ways in nature to co-operate rather than compete." author="Professor Henrietta Moore," cite=" Institute for Global Prosperity" />

		<!-- <ProjectNav /> -->
	</div>
</template>

<script>
import ProjectIntro from '~/components/ProjectIntro.vue';
import ProjectImg from '~/components/ProjectImg.vue';
import ProjectSubtitle from '~/components/ProjectSubtitle.vue';
import ProjectParagraph from '~/components/ProjectParagraph.vue';
import ProjectBlockquote from '~/components/ProjectBlockquote.vue';
import ProjectNav from '~/components/ProjectNav.vue';

definePageMeta({ layout: 'project' })

export default {
	name: 'Anoti',
	components: {
		ProjectIntro,
		ProjectImg,
		ProjectSubtitle,
		ProjectParagraph,
		ProjectBlockquote,
		ProjectNav,
	},
	meta() {
		return {
			title: 'Anoti'
		}
	}
}
</script>
  