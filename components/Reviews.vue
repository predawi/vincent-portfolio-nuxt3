<template>
	<section class="reviews">

		<div class="reviews__bg">
            <svg xmlns="http://www.w3.org/2000/svg" width="1344" height="808" fill="none"><path fill="#FEFBF8" d="M156.552 26.738c124.263-65.896 255.009 5.367 304.849 49.235l2.427 3.698a339.998 339.998 0 0 1 55.277 204.535l-1.749 33.043c-18.04 67.376-126.159 189.895-289.56 151.44C64.394 430.234 7.848 294.771 0 231.846.408 190.933 32.289 92.634 156.552 26.738ZM1216.97 786.318c-100.83 53.436-206.92-4.353-247.364-39.927a286.552 286.552 0 0 1-46.632-172.46l1.229-23.196c14.638-54.637 102.367-153.99 234.957-122.806 132.59 31.184 178.47 141.034 184.84 192.061-.33 33.178-26.2 112.891-127.03 166.328Z"/></svg>
        </div>

		<h2 class="typo-t2 reviews__title js-reviews__title">Reviews</h2>

		<div class="container">
			<div class="reviews__list">
				<review-card
					v-for="(review, index) in reviews"
					:key="review.author + index"
					:author="review.author"
					:company="review.company"
					:review="review.review"
					:link="review.link"
					:imgSrc="review.imgSrc"
					:imgAlt="`${review.author} review`"
				>
				</review-card>
			</div>
			<div class="clear"></div>
		</div>
		<!-- // -->
	</section>
</template>

<script>
import reviews from '../data/reviews.json'
import ReviewCard from '~/components/ReviewCard.vue'

export default {
	name: 'NuxtReviews',
	components: {
		ReviewCard,
  	},
	data() {
		return {
			reviews,
		}
	},
}
</script>
<style lang="scss">
.reviews {
	position: relative;
	margin-top: rem(112px);

	@include tablet {
		margin-top: rem(230px);
	}

	&__bg {
		position: absolute;
		z-index: -1;
		left: 50%;
		transform: translateX(-50%);
	}

	&__title {
		top: 40%;
		position: sticky;
		text-align: center;
		z-index: 2;
	}

	&__list {
		max-width: 770px;
		margin: rem(40px) auto 0;

		@include tablet {
			margin: rem(100px) auto 0;
		}
	}
}
</style>