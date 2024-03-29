<template>
    <div class="d-flex">

        <project-card :link="prevPageSlug" :title="prevPageName" :category="prevPageCategory" :description="prevPageDescription" class="project-card--nav" />
        <project-card :link="nextPageSlug" :title="nextPageName" :category="nextPageCategory" :description="nextPageDescription" class="project-card--nav" />
        
    </div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard.vue'

import axios from 'axios';

// import { createClient } from '@supabase/supabase-js'

// const supabase = createClient('https://dtdgsqcyembnqzqnqhou.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0ZGdzcWN5ZW1ibnF6cW5xaG91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMzIwODksImV4cCI6MjAyNjYwODA4OX0.SxCGGe9Y-meVQ9PLPHzgs9txXp8hVF8ou9i2Vyh8_nw')
// let projects = ref([])

// const config = useRuntimeConfig()

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
            projects: Array,
        }
    },
    components: {
        ProjectCard,
    },
    methods: {
		getPrevPage() {
            let prevProject = this.projects[this.currentIndex - 1] ? this.projects[this.currentIndex - 1] : this.projects[this.projects.length - 1];
            
            this.prevPageSlug = prevProject.slug;
            this.prevPageName = prevProject.title.rendered;
            this.prevPageCategory = prevProject.acf.category;
            this.prevPageDescription = prevProject.excerpt.rendered;
		},

		getNextPage() {
            let nextProject = this.projects[this.currentIndex + 1] ? this.projects[this.currentIndex + 1] : this.projects[0];

            this.nextPageSlug = nextProject.slug;
            this.nextPageName = nextProject.title.rendered;
            this.nextPageCategory = nextProject.acf.category;
            this.nextPageDescription = nextProject.excerpt.rendered;
		},

		filterCurrentSlug() {
			let currentSlug = this.$route.params.slug;
			let index = 0;

			let filteredObj = this.projects.find(function(item, i) {
				if (item.slug === currentSlug) {
					index = i;
				}
			});

			return index;
		},
	},
    mounted() {
        const config = useRuntimeConfig()

        axios.get(config.public.BACK_OFFICE_URL + 'project/')
            .then(response => {
                this.projects = response.data

                this.currentIndex = this.filterCurrentSlug()
                this.getPrevPage()
                this.getNextPage()
            });
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
