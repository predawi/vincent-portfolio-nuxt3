<template>
	<section class="projects">
		<div class="container">
			<h2 class="typo-t2 projects-title">Latest works</h2>

			<p class="typo-p">I’ve been creating digital products and experiences for more than 8 years as a freelancer. I have had the chance and opportunity to work for a wide range of industries and companies.</p>
		</div>

		<div class="projects-list">
            
			<!-- One tile projet -->
			<div class="container" v-if="project01">
				<project-card :link=project01.slug :title=project01.title.rendered :category=project01.acf.category :description=project01.excerpt.rendered />
			</div>
			
			<!-- Three tiles projects -->
			<div class="projects-row">
				<project-card v-if="project02" :link=project02.slug :title=project02.title.rendered :category=project02.acf.category :description=project02.excerpt.rendered />

                <project-card v-if="project03" :link=project03.slug :title=project03.title.rendered :category=project03.acf.category :description=project03.excerpt.rendered />

				<project-card v-if="project04" :link=project04.slug :title=project04.title.rendered :category=project04.acf.category :description=project04.excerpt.rendered />
			</div>

			<!-- One tile projet -->
			<div class="container" v-if="project05">
				<project-card :link=project05.slug :title=project05.title.rendered :category=project05.acf.category :description=project05.excerpt.rendered />
			</div>

            <div class="projects-grid" >
                <project-card v-for="project in projects" :link=project.slug :title=project.title.rendered :category=project.acf.category :description=project.excerpt.rendered />
            </div>

		</div>
	</section>
</template>

<script>
import axios from 'axios';
import ProjectCard from '~/components/ProjectCard.vue';

export default {
	name: 'NuxtProjects',
	components: {
		ProjectCard,
  	},
    data() {
        return {
            projects: '',
            project01: '',
            project02: '',
            project03: '',
            project04: '',
            project05: '',
        }
    },
      mounted() {
		const config = useRuntimeConfig()

		axios.get(config.public.BACK_OFFICE_URL + 'project')
			.then(response => {
                const drop = (arr, n = 1) => arr.slice(n);
				this.projects = drop(response.data, 5); 
                this.project01 = response.data[0]
                this.project02 = response.data[1]
                this.project03 = response.data[2]
                this.project04 = response.data[3]
                this.project05 = response.data[4]
				
			});
	}
}
</script>

<style lang="scss">
.projects {
    margin-top: rem(70px);
    overflow: hidden;

    @include tablet {
        margin-top: rem(130px);
    }

    &-title {
        margin-bottom: rem(50px);
    }

    &-row {
        display: flex;
        width: 100%;
        overflow: scroll;

        @include tablet {
            max-width: 900px;
            margin: auto;
        }

        .project-card {
            width: rem(324px);
            flex: 0 0 rem(324px);
            margin-left: rem(30px);

            @include tablet {
                flex: 0 1 34%;
                margin-left: 0;
            }

            &:first-of-type {
                margin-left: rem(25px);

                @include tablet {
                    margin-left: 0;
                    border-right: 0;
                }
            }

            &:last-of-type {
                margin-right: rem(25px);

                @include tablet {
                    margin-right: 0;
                    border-left: 0;
                }
            }
        }
    }

    &-grid {
        @include tablet {
            max-width: 900px;
            margin: auto;
            margin-top: rem(20px);
            display: flex;
            flex-wrap: wrap;
        }

        .project-card {
            margin-top: 0;
            border-top: none;

            @include tablet {
                flex: 0 1 33.33%;
            }

            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3) {
                border-top: 1px solid black;
            }

            &:nth-child(3n + 1),
            &:nth-child(3n + 2) {
                @include tablet {
                    border-right: none;
                }
            }

            &:last-child {
                @include tablet {
                    border-right: 1px solid black;
                }
            }
        }
    }

    &-list {
        margin-top: rem(50px);

        @include tablet {
            margin-top: rem(90px);
        }
    }
}
</style>

