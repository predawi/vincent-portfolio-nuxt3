<template>
  <div>
    <Intro />
    <Projects />
    <Clients />
    <Reviews />
  </div>
</template>

<script>
import Clients from '~/components/Clients.vue';
import Intro from '~/components/Intro.vue';
import Projects from '~/components/Projects.vue';
import Reviews from '~/components/Reviews.vue';

export default {
  name: 'IndexPage',
  layout: 'default',
  components: {
    Intro,
    Projects,
    Clients,
    Reviews,
  },
}
</script>
