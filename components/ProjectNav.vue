<template>
    <div class="d-flex">

        <project-card :link="prevPageSlug" :title="prevPageName" :category="prevPageCategory" :description="prevPageDescription" class="project-card--nav" />
        <project-card :link="nextPageSlug" :title="nextPageName" :category="nextPageCategory" :description="nextPageDescription" class="project-card--nav" />
        
    </div>
</template>

<script>
import projects from '../data/project-list.json';
import ProjectCard from '~/components/ProjectCard.vue';

export default {
    name: 'project-nav',
    data() {
        return {
            prevPageSlug: String,
            prevPageName: String,
            prevPageCategory: String,
            prevPageDescription: String,
            nextPageSlug: String,
            nextPageName: String,
            nextPageCategory: String,
            nextPageDescription: String,
            currentIndex: 0,
        }
    },
    components: {
        ProjectCard,
    },
    methods: {
		getPrevPage() {
            let prevProject = projects[this.currentIndex - 1] ? projects[this.currentIndex - 1] : projects[projects.length - 1];
            
            this.prevPageSlug = prevProject.slug;
            this.prevPageName = prevProject.name;
            this.prevPageCategory = prevProject.category;
            this.prevPageDescription = prevProject.description;
		},

		getNextPage() {
            let nextProjet = projects[this.currentIndex + 1] ? projects[this.currentIndex + 1] : projects[0];

            this.nextPageSlug = nextProjet.slug;
            this.nextPageName = nextProjet.name;
            this.nextPageCategory = nextProjet.category;
            this.nextPageDescription = nextProjet.description;
		},

		filterCurrentSlug() {
			let currentSlug = this.$route.name.split("projects-").pop();
			let index = 0;

			let filteredObj = projects.find(function(item, i) {
				if (item.slug === currentSlug) {
					index = i;
				}
			});

			return index;
		},
	},
    mounted() {
        this.currentIndex = this.filterCurrentSlug();
        this.getPrevPage();
        this.getNextPage();
    }
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
