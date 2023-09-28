<template>
    <div>
        <nav class="footer-nav__nav">
            <ul class="footer-nav__list">
                <li class="footer-nav__list-item">
                    <a href="https://www.malt.fr/profile/vincentcharamon" target="_blank"><span>Malt</span></a>
                </li>
                <li class="footer-nav__list-item">
                    <a href="https://www.linkedin.com/in/vincent-charamon-30008aa2/" target="_blank"><span>LinkedIn</span></a>
                </li>
                <li class="footer-nav__list-item">
                    <NuxtLink to="/contact">Contact</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss">
.footer-nav {
    &__list {
        display: flex;
    }

    &__list-item {
        margin: 0 rem(15px);
        text-transform: uppercase;
        line-height: rem(18px);
        font-size: rem(14px);
        font-weight: 300;
        letter-spacing: 0.07em;
        font-family: 'Suisse Int`l', sans-serif;

        @include tablet {
            margin: 0 0 0 rem(26px);
            
        }

        a {
            color: $textcolor;
        }
    }
}

</style>