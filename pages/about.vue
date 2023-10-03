<template>
  <div>
    <AboutMe />
    <CurriculumVitae />
    <AboutMePassion />
  </div>
</template>
<script>
definePageMeta({ layout: 'about' })

import AboutMe from '~/components/AboutMe.vue';
import CurriculumVitae from '~/components/CurriculumVitae.vue';
import AboutMePassion from '~/components/AboutMePassion.vue';

export default {
  name: 'about',
  components: {
    AboutMe,
    CurriculumVitae,
    AboutMePassion,
  },
}
</script>
