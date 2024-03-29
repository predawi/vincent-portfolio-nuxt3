<template>
    <section class="project-subtitle">
        <div class="container">
            <h2 class="typo-t2">{{ text }}</h2>
        </div>
    </section>
</template>

<script>
export default {
    name: 'project-subtitle',
    props: ['text'],
}
</script>

<style lang="scss">
.project-subtitle {
    margin-top: rem(70px);

    @include tablet {
        
    }
}
</style>
