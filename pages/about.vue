<template>
  <div>
    <AboutMe />
    <CurriculumVitae />
  </div>
</template>
<script>
definePageMeta({ layout: 'about' })

import AboutMe from '~/components/AboutMe.vue';
import CurriculumVitae from '~/components/CurriculumVitae.vue';

export default {
  name: 'about',
  components: {
    AboutMe,
    CurriculumVitae,
  },
}
</script>
