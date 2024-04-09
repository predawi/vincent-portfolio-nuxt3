<template>
  <div class="project-card">
    <NuxtLink :to="'/projects/' + link" class="project-card__link">
      <div class="project-card__infos">
        <h3 class="project-card__title">{{ title }}</h3>
        <span v-if="category" class="typo-category project-card__category">{{ category }}</span>
      </div>

      <project-card-description :description=description />
    </NuxtLink>
  </div>
</template>

<script>
import ProjectCardDescription from '~/components/ProjectCardDescription.vue';

export default {
  name: 'project-card',
  components: {
    ProjectCardDescription,
  },
  props: ['link', 'title', 'category', 'description'],
}
</script>

<style lang="scss">
.project-card {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: rem(215px);
  margin-top: rem(30px);
  border: 1px solid $textcolor;
  background: $maincolor;

  @include tablet {
    height: rem(300px);
    margin-top: rem(20px);
  }

  &--nav {
    flex: auto;
    margin: rem(100px) rem(24px) 0;
    background: $maingrey;

    @include tablet {
      flex: 0 0 50%;
      margin: rem(140px) 0 0;
    }

    &:first-child {
      display: none;

      @include tablet {
        display: flex;
        border-left: none;
      }
    }

    &:last-child {
      @include tablet {
        border-left: none;
        border-right: none;
      }
    }
  }

  &:hover,
  &:focus {
    .project-card__description {
      opacity: 1;
    }
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    padding: rem(30px);
  }

  &__infos {
    text-align: right;
  }

  &__title {
    margin: 0;
    line-height: rem(28px);
    font-size: rem(24px);
    font-weight: 300;
    font-family: 'Canela', sans-serif;
  }

  &__category {
    display: block;
    margin-top: rem(10px);
    text-transform: uppercase;
    font-size: rem(12px);
    letter-spacing: 0.07em;
    font-family: 'Suisse Int`l', sans-serif;
  }
}
</style>
