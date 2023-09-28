<template>
    <div class="reviews__card">
        <div class="reviews__infos">
            <img v-if="imgSrc" :src="imgSrc" :alt="imgAlt" class="reviews__avatar" />
            <div class="reviews__metas">
                <h3 v-if="author" class="reviews__author">{{ author }}</h3>
                <span v-if="company" class="typo-category reviews__category">{{ company }}</span>
            </div>
        </div>

        <div v-if="review" class="reviews__content">{{ review }}</div>

        <a v-if="link" :href="link" class="reviews__link">Voir l'avis</a>
    </div>
</template>

<script>
export default {
name: 'review-card',
props: ['imgSrc', 'imgAlt', 'author', 'company', 'review', 'link'],
}
</script>

<style lang="scss">
.reviews {
    &__card {
        position: relative;
        z-index: 3;
        margin-bottom: rem(30px);
        padding: rem(30px) rem(35px) rem(35px);
        border: 1px solid $textcolor;
        background: $maincolor;

        &:nth-child(odd) {
            z-index: 1;
        }

        @include tablet {
            z-index: 3;
            width: 366px;
            margin-bottom: rem(40px);
            padding: rem(35px) rem(40px) rem(40px);

            &:nth-child(odd) {
                float: left;
                clear: both;
            }

            &:nth-child(even) {
                float: right;
            }

            &:nth-child(4n + 3){
                left: rem(35px);
            }

            &:nth-child(4n + 4) {
                left: rem(45px);
            }

            &:nth-child(2n + 2) {
                margin-top: rem(40px);
            }

            &:nth-child(3n + 0) {
                z-index: 3;
            }

            &:nth-child(3n + 1) {
                z-index: 1;
            }
        }
    }

    &__infos {
        display: flex;
        align-items: center;
    }

    &__avatar {
        margin-right: rem(13px);
        border-radius: 50%;
    }

    &__author {
        margin: 0;
        line-height: rem(24px);
        font-size: rem(20px);
        font-weight: 300;
        font-family: 'Canela', sans-serif;

        @include tablet {
            line-height: rem(27px);
            font-size: rem(23px);
        }
    }

    &__content {
        margin-top: rem(30px);
    }

    &__link {
        display: block;
        margin-top: rem(30px);
    }
}
</style>
