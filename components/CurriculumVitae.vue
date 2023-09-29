<template>
    <section class="cv">
        <div class="cv__bg">
            <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="2933" fill="none"><path fill="#252525" d="M1005 1688.29c203.2-141.2 417 11.5 498.5 105.5l91.5 517c-46.5 142.5-206.3 406.9-473.5 324.5-267.2-82.4-359.667-372.66-372.5-507.5.667-87.66 52.8-298.3 256-439.5Z"/><path fill="#282828" d="M939.499 1702.42c68.501-310 418.331-279.33 541.501-212.5v537.5l-374.8 139.21c-56.04 20.82-119.708-2.36-146.405-55.85-63.437-127.09-89.863-230.99-20.296-408.36Z"/><path fill="#252525" d="M898.23 256.421c68.499-310 418.33-279.334 541.5-212.5v537.5l-374.8 139.211c-56.04 20.815-119.707-2.365-146.405-55.853-63.437-127.094-89.863-230.984-20.295-408.358ZM128.552 2483.74c124.263-65.9 255.009 5.36 304.849 49.23l2.427 3.7a340.007 340.007 0 0 1 55.277 204.54l-1.749 33.04c-18.04 67.37-126.159 189.89-289.56 151.44C36.394 2887.23-20.152 2751.77-28 2688.85c.408-40.92 32.289-139.22 156.552-205.11Z"/><path fill="#282828" d="M749.709 1066.5c-503.2 117.2-706.666-28.83-745.5-116.5-83.166 46.5-199.6 177.5 0 329.5s491.834 83 613 29.5c253.834-129.67 635.701-359.7 132.5-242.5Z"/></svg>
        </div>

        <div class="cv__step">
            <h2 class="cv__step-title">2016 - Present</h2>

            <table class="cv__table">
                <tr class="cv__table-tr">
                    <th class="cv__table-th">ROLE</th>
                    <td class="cv__table-t">Product designer / UX designer / CX designer</td>
                </tr>
                <tr class="cv__table-tr">
                    <th class="cv__table-th">FOR</th>
                    <td class="cv__table-t">
                        <h3>Agencies</h3>
                        <p>Malherbe, LaFourmi, UX Republic, DVTK, BeAPI, La Netscouade, Plan Net, Retrofutur, OpenClassRooms, Upscape, and more</p>

                        <h3>Clients</h3>
                        <p>Gucci, Hermès, Barbican Center, Datakeen, Total Energies, Anoti, Masan Group, BNP Paribas, Jaeger-Lecoultre, Free, BPCE group, Crédit Agricole, Coty, Keolis, RATP (Open Tour), M6, Wellio, TeleZ, Staci, Flexfuel, World Organisation for Animal Health, ...</p>
                    </td>
                </tr>
                <tr class="cv__table-tr">
                    <th class="cv__table-th">MISSION</th>
                    <td class="cv__table-t">Consulting on competition for international clients</td>
                </tr>
            </table>
        </div>
        
    </section>
</template>

<script>
export default {
	name: 'CurriculumVitae'
}
</script>

<style lang="scss">
.cv {
    position: relative;
    margin-top: rem(30px);

    @include tablet {
        margin-top: rem(150px);
    }

    &__bg {
        position: absolute;
        z-index: -1;
        top: rem(-100px);
        left: 0;
        
        svg {
            max-width: 100%;
        }
    }

    &__container.container {
        position: relative;

        @include tablet {
            max-width: 620px;
            padding: 0;
        }  
    }
}
</style>
