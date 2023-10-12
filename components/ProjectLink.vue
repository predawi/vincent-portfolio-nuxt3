<template>
    <section class="project-link">
        <div class="container" :style="`text-align: ${alignment};`">
            <a :href=linkSrc>{{ linkTitle }}</a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'project-link',
    props: ['linkSrc', 'linkTitle', 'alignment'],
}
</script>

<style lang="scss">
.project-link {
    margin-top: rem(70px);
    text-transform: uppercase;
    text-decoration: underline;

    @include tablet {
        
    }
}
</style>
