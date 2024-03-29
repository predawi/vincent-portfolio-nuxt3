<template>
    <section class="project-intro">
        <div class="container">
            <div class="d-flex project-intro__metas">
                <h1 class="typo-t1 project-intro__title">{{ title }}</h1>
                <span class="project-intro__skills">{{ skills }}</span>
            </div>

            <div class="typo-p project-intro__content" v-html="htmlText"></div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'project-intro',
    props: ['title', 'skills', 'htmlText'],
}
</script>

<style lang="scss">
.project-intro {
    

    @include tablet {
        
    }

    &__metas {
        display: flex;
        justify-content: space-between;
        min-height: 172px;

        @include tablet {
            justify-content: flex-start;
            align-items: flex-end;
            min-height: none;
        }
    }

    &__title {
        @include tablet {
            margin-right: rem(13px);
        }
    }

    &__skills {
        line-height: rem(12px);
        font-size: rem(10px);

        @include tablet {
            margin-bottom: rem(16px);
        }
    }

    &__content {
        margin: rem(70px) 0 0;

        @include tablet {
            max-width: 584px;
            margin: rem(70px) 0 0 rem(100px);
        }
    }
}
</style>
