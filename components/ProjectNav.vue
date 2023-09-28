<template>
    <div class="d-flex">
        <project-nav-card :link="this.getPrevPage.slug" :title="this.getPrevPage.name" :category="this.getPrevPage.category" />
        <project-nav-card :link="this.getNextPage.slug" :title="this.getNextPage.name" :category="this.getNextPage.category" />
    </div>
</template>

<script>
import projects from '../data/project-list.json';
import ProjectNavCard from '~/components/ProjectNavCard.vue';

export default {
    name: 'project-nav',
    props: ['link', 'title', 'category'],
    components: {
        ProjectNavCard,
    },
    computed: {
		getPrevPage() {
			let currentIndex = this.filterCurrentSlug;
			return projects[currentIndex - 1] ? projects[currentIndex - 1] : projects[projects.length - 1];
		},

		getNextPage() {
			let currentIndex = this.filterCurrentSlug;
			return projects[currentIndex + 1] ? projects[currentIndex + 1] : projects[0];
		},

		filterCurrentSlug() {
			let currentSlug = this.$route.path.substring(this.$route.path.lastIndexOf('/') + 1);
			let index = -1;
			let val = currentSlug;
			let filteredObj = projects.find(function(item, i) {
				if (item.slug === val) {
					index = i;
				}
			});

			return index;
		}
	},
}
</script>

<style lang="scss">
.project-nav {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex: auto;
    height: rem(215px);
    margin: rem(100px) rem(24px) 0;
    border: 1px solid $textcolor;
    background: $maingrey;

    @include tablet {
        flex: 0 0 50%;
        height: rem(300px);
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
</style>
