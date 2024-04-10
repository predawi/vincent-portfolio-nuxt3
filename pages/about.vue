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
import AboutMePassion from '~/components/AboutMePassion.vue';
import CurriculumVitae from '~/components/CurriculumVitae.vue';

export default {
  name: 'about',
  components: {
    AboutMe,
    CurriculumVitae,
    AboutMePassion,
  }
}
</script>
