<template>
  <section class="cv">
    <div class="cv__bg">
      <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="2933" fill="none">
        <path fill="#252525"
          d="M1005 1688.29c203.2-141.2 417 11.5 498.5 105.5l91.5 517c-46.5 142.5-206.3 406.9-473.5 324.5-267.2-82.4-359.667-372.66-372.5-507.5.667-87.66 52.8-298.3 256-439.5Z" />
        <path fill="#282828"
          d="M939.499 1702.42c68.501-310 418.331-279.33 541.501-212.5v537.5l-374.8 139.21c-56.04 20.82-119.708-2.36-146.405-55.85-63.437-127.09-89.863-230.99-20.296-408.36Z" />
        <path fill="#252525"
          d="M898.23 256.421c68.499-310 418.33-279.334 541.5-212.5v537.5l-374.8 139.211c-56.04 20.815-119.707-2.365-146.405-55.853-63.437-127.094-89.863-230.984-20.295-408.358ZM128.552 2483.74c124.263-65.9 255.009 5.36 304.849 49.23l2.427 3.7a340.007 340.007 0 0 1 55.277 204.54l-1.749 33.04c-18.04 67.37-126.159 189.89-289.56 151.44C36.394 2887.23-20.152 2751.77-28 2688.85c.408-40.92 32.289-139.22 156.552-205.11Z" />
        <path fill="#282828"
          d="M749.709 1066.5c-503.2 117.2-706.666-28.83-745.5-116.5-83.166 46.5-199.6 177.5 0 329.5s491.834 83 613 29.5c253.834-129.67 635.701-359.7 132.5-242.5Z" />
      </svg>
    </div>

    <!-- 2016 - Present -->
    <div class="cv__table-wrapper">
      <h3 class="typo-t3 cv__table-title">2016 - Present</h3>

      <table class="cv__table">
        <tr class="cv__table-tr">
          <th class="cv__table-th">ROLE</th>
          <td class="cv__table-td">Product designer / UX designer / CX designer</td>
        </tr>
        <tr class="cv__table-tr">
          <th class="cv__table-th">FOR</th>
          <td class="cv__table-td">
            <h3>Agencies</h3>
            <p>Spintank La Fourmi Cosa Vostra Malherbe DVTK BeAPI La Netscouade UX Republic Service Plan Upscape and
              more</p>

            <h3>Clients</h3>
            <p>Renault Hermès Gucci Jaeger Lecoultre Coty Calvin Klein Free Barbican Center Bnp Paribas BPCE Open class
              room Télé Z World Economic Forum World Health Organisation Systran Offstage Crédit Agricole Masan Group
              Ami Paris Datakeen and many more</p>
          </td>
        </tr>
        <tr class="cv__table-tr">
          <th class="cv__table-th">MISSION</th>
          <td class="cv__table-td">
            Consulting on competition for international clients <br><br>
            Supervise and support UX & UI methods and techniques <br><br>
            Leading conception & creation teams<br><br>
            Product Manager<br><br>
            Monitor UX/UI/Development production <br><br>
            Carry out quantitative user-research: surveys, GA & GTM data analysis<br><br>
            Carry out qualitative user-research: focus groups, user interviews, user workshops (sketching, co-creation,
            card sorting, user flows, personas) <br><br>
            Design multilingual and multi-country websites<br><br>
            Design e-commerce websites and optimise mobile shopping user flows <br><br>
            Create UX training materials <br><br>
            Design digital touch window display for retail and travel retail <br><br>
            Create wireframes and prototypes<br><br>
            Work on user recruitment and user testing: Maze, Miro, Klaxoon<br><br>
          </td>
        </tr>
      </table>
    </div>

    <!-- 2020 - Present -->
    <div class="cv__table-wrapper">
      <h3 class="cv__table-title">
        <button class="typo-t3" @click="openCollapse" data-target="collapse01">
          2020 - Present
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" class="cv__table-plus">
            <path fill="#D9D9D9" fill-rule="evenodd" d="M15.5 0h-1v14.5H0v1h14.5V30h1V15.5H30v-1H15.5V0Z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </h3>

      <div class="cv__collapsed collapsed" id="collapse01">
        <table class="cv__table collapsed">
          <tr class="cv__table-tr">
            <th class="cv__table-th">ROLE</th>
            <td class="cv__table-td">TEACHER & JURY</td>
          </tr>
          <tr class="cv__table-tr">
            <th class="cv__table-th">FOR</th>
            <td class="cv__table-td">
              Open class rooms, L’ecole multimedia, Digital Campus, <br>JEDY formation
            </td>
          </tr>
          <tr class="cv__table-tr">
            <th class="cv__table-th">MISSION</th>
            <td class="cv__table-td">
              Teaching UX & UI design to Master & professionnal students<br><br>
              Following students through hackathon and school competitions
            </td>
          </tr>
        </table>
      </div>
    </div>

    <!-- 2017 - 2020 -->
    <div class="cv__table-wrapper">
      <h3 class="cv__table-title">
        <button class="typo-t3" @click="openCollapse" data-target="collapse02">
          2017 - 2020
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" class="cv__table-plus">
            <path fill="#D9D9D9" fill-rule="evenodd" d="M15.5 0h-1v14.5H0v1h14.5V30h1V15.5H30v-1H15.5V0Z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </h3>

      <div class="cv__collapsed collapsed" id="collapse02">
        <div class="cv__black-chips">
          <img src="/black-chips.png" alt="" loading="lazy">
          <a href="#">See the vidéo</a>
        </div>

        <table class="cv__table collapsed">
          <tr class="cv__table-tr">
            <th class="cv__table-th">ROLE</th>
            <td class="cv__table-td">FOUNDER OF A DIGITAL CORE TEAM (BLACK CHIPS)</td>
          </tr>
          <tr class="cv__table-tr">
            <th class="cv__table-th">FOR</th>
            <td class="cv__table-td">
              Printemps, Po&me, Poilane, HeavyM, Blue, Cowash, Clickeat, Pandacraft, Lita, Animaux santé, Suez, La
              petite étoile
            </td>
          </tr>
          <tr class="cv__table-tr">
            <th class="cv__table-th">MISSION</th>
            <td class="cv__table-td">
              Team Production Manager<br><br>
              Account Manager<br><br>
              Conducting user interviews, user testings, strategy workshops<br><br>
              Wireframing & prototyping ecommerce, mobile apps, Saas<br><br>
              Team management (UX designers, Creatives, Developpers)<br><br>
              Creating CMS based websites (woocommerce, prestashops, shopify)<br><br>
              Designed iOS and Android native mobile apps<br><br>
              Built visual identities and experiential websites
            </td>
          </tr>
        </table>
      </div>
    </div>

    <!-- Education & Training -->
    <div class="container cv__container">
      <h2 class="typo-t2 cv__subtitle">Education & Training</h2>
      <p class="typo-t3">All my higher education was done on a work-study basis</p>
    </div>

    <div class="cv__table-wrapper">
      <h3 class="typo-t3 cv__table-title">2015</h3>
      <table class="cv__table">
        <tr class="cv__table-tr">
          <th class="cv__table-th">SCHOOL</th>
          <td class="cv__table-td">ECOLE MULTIMEDIA (PARIS)</td>
        </tr>
        <tr class="cv__table-tr">
          <th class="cv__table-th">DIPLOMA</th>
          <td class="cv__table-td">Master’s Degree in User Experience Design</td>
        </tr>
      </table>
    </div>
    <div class="cv__table-wrapper">
      <h3 class="typo-t3 cv__table-title">2014</h3>
      <table class="cv__table">
        <tr class="cv__table-tr">
          <th class="cv__table-th">SCHOOL</th>
          <td class="cv__table-td">ECOLE MULTIMEDIA (PARIS)</td>
        </tr>
        <tr class="cv__table-tr">
          <th class="cv__table-th">DIPLOMA</th>
          <td class="cv__table-td">Bachelor’s Degree in Digital Project Management</td>
        </tr>
      </table>
    </div>
    <div class="cv__table-wrapper">
      <h3 class="typo-t3 cv__table-title">2013</h3>
      <table class="cv__table">
        <tr class="cv__table-tr">
          <th class="cv__table-th">SCHOOL</th>
          <td class="cv__table-td">Ecole SUPERIEUR DE PUBLICITE (ESP PARIS)</td>
        </tr>
        <tr class="cv__table-tr">
          <th class="cv__table-th">DIPLOMA</th>
          <td class="cv__table-td">Bachelor’s Degree in Advertising & Communication</td>
        </tr>
      </table>
    </div>
    <div class="cv__table-wrapper">
      <h3 class="typo-t3 cv__table-title">2011</h3>
      <table class="cv__table">
        <tr class="cv__table-tr">
          <th class="cv__table-th">SCHOOL</th>
          <td class="cv__table-td">EPH (PARIS)</td>
        </tr>
        <tr class="cv__table-tr">
          <th class="cv__table-th">DIPLOMA</th>
          <td class="cv__table-td">BTS (Advanced Technician’s Certificate) inCommunication</td>
        </tr>
      </table>
    </div>


    <!-- Languages -->
    <div class="container cv__container">
      <div class="cv__oval">
        <svg xmlns="http://www.w3.org/2000/svg" width="263" height="244" fill="none">
          <path stroke="#FBF8F3"
            d="M111.941 41.15c30.809-11.213 60.87-15.336 84.555-12.957 23.724 2.383 40.871 11.26 46.183 25.855 5.312 14.594-2.117 32.416-18.759 49.491-16.614 17.047-42.293 33.212-73.102 44.425-30.81 11.214-60.871 15.337-84.556 12.958-23.724-2.382-40.87-11.26-46.183-25.855-5.312-14.594 2.117-32.416 18.759-49.491C55.452 68.529 81.13 52.364 111.94 41.15Z" />
          <path stroke="#FBF8F3"
            d="M111.941 65.15c30.809-11.213 60.87-15.336 84.555-12.957 23.724 2.383 40.871 11.26 46.183 25.855 5.312 14.594-2.117 32.416-18.759 49.491-16.614 17.047-42.293 33.212-73.102 44.425-30.81 11.214-60.871 15.337-84.556 12.958-23.724-2.382-40.87-11.26-46.183-25.855-5.312-14.594 2.117-32.416 18.759-49.491C55.452 92.529 81.13 76.364 111.94 65.151Z" />
          <path stroke="#FBF8F3"
            d="M111.941 95.15c30.809-11.213 60.87-15.336 84.555-12.957 23.724 2.383 40.871 11.26 46.183 25.855 5.312 14.594-2.117 32.416-18.759 49.491-16.614 17.047-42.293 33.212-73.102 44.425-30.81 11.214-60.871 15.337-84.556 12.958-23.724-2.382-40.87-11.26-46.183-25.855-5.312-14.594 2.117-32.416 18.759-49.491 16.614-17.047 42.293-33.212 73.103-44.425Z" />
        </svg>
      </div>

      <h2 class="typo-t2 cv__subtitle">Languages</h2>
      <p class="typo-t3">I’ve studied at an international school and I speak english on a daily base</p>
    </div>

    <div class="cv__table-wrapper">
      <h3 class="typo-t3 cv__table-title">2011</h3>
      <table class="cv__table">
        <tr class="cv__table-tr">
          <th class="cv__table-th">FRENCH</th>
          <td class="cv__table-td">NATIVE</td>
        </tr>
        <tr class="cv__table-tr">
          <th class="cv__table-th">ENGLISH</th>
          <td class="cv__table-td">
            Professional English (full professional proficiency)<br><br>
            Conducted workshops and projects in English for: <br><br>
            Masan Group (Vietnam), BNP Paribas CIB, Jaeger-Lecoultre, Gucci, and WOAH (World organisation for Animal
            Health)
          </td>
        </tr>
      </table>
    </div>

  </section>
</template>

<script>
export default {
  name: 'CurriculumVitae',
  methods: {
    openCollapse(e) {
      let target = e.currentTarget.getAttribute('data-target');

      e.currentTarget.classList.toggle('close');
      document.getElementById(target).classList.toggle('collapsed');
    }
  }
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
    right: 0;
    opacity: 0.4;

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

  &__table-wrapper {
    @include tablet {
      margin: auto;
      max-width: 622px;
    }
  }

  &__table-title {
    margin-top: rem(40px);
    padding: rem(25px);

    @include tablet {
      margin-top: rem(80px);
      padding: 0;
    }

    @include smallDesktop {
      position: absolute;
      display: block;
      left: 0;
      text-align: center;
      width: calc((100vw - 620px) / 2);
      margin-top: 0;
    }

    button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      color: #fff;

      @include smallDesktop {
        justify-content: center;
      }
    }
  }

  &__black-chips {
    text-align: center;

    @include smallDesktop {
      position: absolute;
      display: block;
      left: 0;
      text-align: center;
      width: calc((100vw - 620px) / 2);
    }

    img {
      display: block;
      margin: rem(100px) auto rem(32px);
      max-width: 100px;
    }
  }

  &__table-plus {
    transition: transform .2s ease-out;

    @include tablet {
      display: none;
    }

    .close & {
      transform: rotate(45deg);
    }
  }

  &__table {
    border-collapse: collapse;
    border: 0.25px solid $maincolor;

    @include tablet {
      width: 100%;
      margin-top: rem(80px);
    }
  }

  &__collapsed {
    &.collapsed {
      @include mobile {
        display: block;
        height: 0;
        border: 0;
        border-bottom: 0.25px solid $maincolor;
        overflow: hidden;
      }
    }
  }

  &__table-tr {
    border-bottom: 0.25px solid $maincolor;

    &:first-child {
      .cv__table-td {
        text-transform: uppercase;
        line-height: rem(18px);
        font-size: rem(14px);
        font-weight: 600;
      }
    }

    &:last-child {
      border-bottom: none;
    }
  }

  &__table-th {
    border-right: 0.25px solid $maincolor;
    line-height: rem(16px);
    font-size: rem(12px);
    font-weight: 600;

    @include tablet {
      width: 100px;
    }
  }

  &__table-th,
  &__table-td {
    padding: rem(32px) rem(27px);
  }

  &__table-td {
    h3 {
      line-height: rem(15px);
      font-size: rem(13px);
    }

    p {
      margin-top: rem(10px);
      margin-bottom: 0;

      &+h3 {
        margin-top: rem(36px);
      }
    }
  }

  &__subtitle {
    margin-top: rem(80px);
    margin-bottom: rem(28px);

    @include tablet {
      margin-top: rem(100px);
      margin-bottom: rem(10px);
      line-height: rem(108px);
    }
  }

  &__oval {
    display: block;
    margin: rem(84px) auto 0;

    @include tablet {
      margin: rem(84px) 0 0;

      &+.cv__subtitle {
        margin-top: 0;
      }
    }

    @include smallDesktop {
      position: absolute;
      margin-top: 0;
      margin-left: rem(-300px);

      &+.cv__subtitle {
        margin-top: rem(100px);
      }
    }
  }
}
</style>
