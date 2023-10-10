<template>
	<section class="clients">
        <div class="clients__bg">
            <svg xmlns="http://www.w3.org/2000/svg" width="1014" height="1107" fill="none"><path fill="#FFFDFA" d="M512.609 1065.5c-310-68.5-123.754-418.333-56.92-541.5h381.92l139.212 374.8c20.815 56.041-2.365 119.71-55.854 146.4-127.093 63.44-230.984 89.87-408.358 20.3Z" opacity=".6"/><path fill="#FCF7EF" d="M363.117 593.613c169.982-103.361 290.297-96.317 366.488-56.427 53.622 28.074 132.024 28.938 132.941-31.582.91-60.141-22.31-131.281-97.895-199.078-143.804-128.989-303.721-30.727-365.704 34.528-126.794 154.024-311.472 420.17-35.83 252.559Z"/><path fill="#FEFBF8" d="M156.552 398.738c124.263-65.896 255.009 5.367 304.849 49.235l2.427 3.698a340 340 0 0 1 55.277 204.535l-1.749 33.043c-18.04 67.376-126.159 189.895-289.56 151.44C64.394 802.234 7.848 666.771 0 603.846c.408-40.913 32.289-139.212 156.552-205.108Z"/><path fill="#F8F3EC" d="M201.046 407c141.835-51.817 82.052-235.87 27.357-335.647-5.948-10.849-15.062-19.505-25.891-25.488l-6.365-3.517c-47.756-26.385-105.665-26.617-153.63-.614l-3.789 2.054c-12.766 6.92-20.847 20.155-20.602 34.674C20.559 222.719 59.054 458.874 201.046 407Z"/></svg>
        </div>

		<div class="container">
			
            <div class="clients__wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 483 663" fill="none" ref="fadein" class="clients__gate reveal">
                    <path class="union-path" stroke="#222" stroke-width=".5" fill="none" d="M242 1.5C110.061 1.5 3.04 108.188 2.502 240h28c.54-116.349 95.249-210.5 211.998-210.5S453.958 123.651 454.498 240h27C480.959 108.188 373.939 1.5 242 1.5ZM454.5 241h-.001l-.498 421h27l.498-421H454.5Zm-1.001-.502L453.001 662l-.001 1h29l.499-422h.001l-.001-.526.001-.474h-.002C481.959 107.635 374.491.5 242 .5 109.509.5 2.04 107.635 1.502 240l-.001.417L1.5 241 1 661.999.999 663H32L32 661.999 31.5 241m421.999-.502C453.228 124.474 358.865 30.5 242.5 30.5c-116.533 0-211 94.245-211 210.499m-1 .001h-28l-.499 420L2 662h29l-.001-1-.499-420Z" clip-rule="evenodd"/>
                </svg>

                <div class="clients__content">
                    <h2 class="clients__title">I’ve also worked with</h2>

                    <p class="clients__list">Gucci . COTY . RATP . Poilane . Open class room . Les fruits & légumes frais . FlexFuel . NOOZ . Anoti . RX Production . UX Republic . BeAPI . DVTK . Upscape . Malherbe . Retrofutur . Crédit Agricole . Plan NET . La Netscouade . Cowash . Hermès . 34 Studio . Printemps</p>
                </div>
            </div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'NuxtProjects'
}
</script>

<style lang="scss">
.clients {
    margin-top: 112px;
    overflow-x: hidden;

    @include tablet {
        margin-top: 230px;
    }

    &__bg {
        position: absolute;
        z-index: -1;
        left: 50%;
		transform: translateX(-50%);

        @include tablet {
            margin-top: -360px;
        }

        svg {
            @include mobile {
                max-width: 100%;
            }
        }
    }

    &__wrapper {
        position: relative;
        max-width: 480px;
        margin: auto;
    }

    &__gate {
        display: block;
        width: 100%;
    }

    &__content {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        padding: 0 rem(40px);

        @include tablet {
            padding: 0 rem(85px);
        }
    }

    &__title {
        margin: 0;
        line-height: rem(74px);
        font-size: rem(70px);
        font-weight: 100;
        letter-spacing: -0.04em;
        text-align: center;
        font-family: 'Canela', sans-serif;

        @include tablet {
            line-height: rem(99px);
            font-size: rem(97px);
        }
    }

    &__list {
        margin: rem(30px) 0 0;

        @include tablet {
            margin: rem(47px) 0 0;
        }
    }
}
</style>
