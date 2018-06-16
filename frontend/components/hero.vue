<template>
    <div>
        <div class="hero__sidenav" v-bind:class="{ 'hero__sidenav--active' : showNav }">
            <ul class="hero__sidenav__list">
                <li v-for="(link, index) in links" class="hero__nav__link" v-bind:key="index">
                    <a :href="link.href"> {{ link.label }} </a>
                </li>
            </ul>
        </div>

        <div class="hero" v-bind:class="{ 'hero--pushed' : showNav }" v-bind:style="{ height: viewport }">


            <div class="hero__nav">
                <ul class="hero__nav__list">
                    <li v-for="(link, index) in links" class="hero__nav__link" v-bind:key="index">
                        <a :href="link.href"> {{ link.label }} </a>
                    </li>
                </ul>
                <span class="hero__nav__trigger" v-on:click="toggleNav">Menu</span>
            </div>

            <div class="particle-container">
                <img v-for="(logo, index) in logos" :src="logo" :class="['particle-' + index]"/>

                <div class="particle-container__cover">
                    <h3 class="hero__tagline">
                        Nathan Horrigan is… <br/>
                        <span class="hero__tagline--large">A Frontend Developer</span> <br/>
                        in Somerset, England
                    </h3>
                    <ul class="hero__socials">
                        <li v-for="social in socials" class="hero__socials__item">
                            <a :href="social.href" class="hero__socials__item__link">
                                <font-awesome-icon :icon="social.icon" class="hero__socials__item__icon"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <font-awesome-icon icon="chevron-down" class="hero__arrow"/>

            <div class="hero__cover"></div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      links: {
        default: () => ([
          {label: 'About Me.', href: '/about'},
          {label: 'My Work.', href: '/work'},
          {label: 'Blog.', href: '/blog'},
          {label: 'Stories.', href: '/stories'},
          {label: 'Snippets.', href: '/snippets'},
          {label: 'Contact Me.', href: '/contact'},
        ]),
        type: Array
      },

      logos: {
        default: () => ([
          require('@images/landing/vuejs.png'),
          require('@images/landing/ts.png'),
          require('@images/landing/react.png'),
          require('@images/landing/wordpress.png'),
          require('@images/landing/laravel.png'),
          require('@images/landing/wagtail.png'),
          require('@images/landing/github.png'),
          require('@images/landing/git.png'),
          require('@images/landing/docker.png'),
          require('@images/landing/rxjs.jpg'),
          require('@images/landing/redux.svg'),
        ]),
        type: Array
      },

      socials: {
        default: () => ([
          {href: 'http://github.com', icon: ['fab', 'github']},
          {href: 'http://twitter.com', icon: ['fab', 'twitter']},
          {href: 'http://medium.com', icon: ['fab', 'medium']},
          {href: 'mailto://NathHorrigan@gmail.com', icon: 'envelope'},
        ]),
        type: Array
      }
    },
    data: () => ({
      showNav: false,
      viewport: (typeof window != 'undefined') ? (window.innerHeight + 'px') : '100vh'
    }),
    methods: {
      toggleNav: function () {
        this.showNav = !this.showNav
      }
    }
  }
</script>

<style lang="scss">
    @import "~scss/grid";
    @import "~scss/fonts";
    @import "~scss/variables";

    html, body {
        overflow-x: hidden;
    }

    .hero {
        height: 100%;
        width: 100%;
        overflow: hidden;
        user-select: none;
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        &--pushed {
            left: calc(75vw - 10px) !important;
            right: calc(-75vw - 10px) !important;
        }
    }

    .hero__sidenav {
        display: flex;
        transition: left 0.2s;
        z-index: 10;
        width: 75vw;
        background: green;
        position: absolute;
        top: 0;
        left: -75vw;
        min-height: 100vh;
        background: #131417;

        &--active {
            left: 0 !important;
        }

        &__list {
            width: 100%;
            height: 100%;
            list-style: none;
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 0;
            padding-top: 60px;
        }
    }

    .hero__nav {
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;
        z-index: 5;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 !important;
        padding: 0 !important;

        &__list {
            @include for-phone-only {
                display: none;
            }
            list-style: none;
            display: flex;
            flex-direction: row;
            // justify-content: center;
            align-items: center;
        }

        &__link {
            padding-left: 20px;
            padding-right: 20px;
            @include for-phone-only {
                padding-top: 20px;
                padding-bottom: 20px;
            }
            cursor: pointer;
            * {
                color: black;
                font-size: 12pt;
                font-family: Poppins, sans-serif;
                font-weight: 600;
                text-decoration: none;
                user-select: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }

        &__trigger {
            display: none;
            @include for-phone-only {
                display: block !important;
            }
            cursor: pointer;
            font-size: 15pt;
            border: 3px solid white;
            border-radius: 5px;
            font-family: Poppins, sans-serif;
            color: white;
            padding-left: 8px;
            padding-right: 8px;
            padding-top: 5px;
            padding-bottom: 5px;
            position: absolute;
            left: -30px;
            top: 0;
            user-select: none;
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0); // Use for Android Only
        }

    }

    .particle-container {
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    @for $i from 0 through 100 {
        .particle-#{$i} {
            $size: 40px;
            width: auto;
            height: $size;
            z-index: 1;

            position: absolute;
            bottom: -90px; // Below Viewport
            left: random(90) + vw; // Random X

            animation: particle 25s infinite;
            animation-delay: (3 * $i) + s;
        }
    }


    @keyframes particle {
        0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
        }

        100% {
            transform: translate3d(
                (random(200) - 100) + px,
                calc(-100vh - 120px),
                0px
            )
            rotate(random(3) * 360deg);;
        }
    }

    .particle-container__cover {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.4);
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .hero__tagline {
        margin: 0;
        text-align: center;
        color: black;
        font-family: daily-grind;
        font-size: 22pt;
        line-height: 65px;
        z-index: 5;
        &--large {
            font-size: 48pt;
            color: $accent !important;
        }
    }

    .hero__socials {
        display: flex;
        list-style: none;
        margin-top: 25px;
        padding: 0;

        &__item {
            margin-left: 25px;
            margin-right: 25px;
        }

        &__item__link {
            text-decoration: none;
            user-select: none;
            color: black;
            font-size: 20pt;

            &:hover {
                color: $accent;
            }
        }

        &__item__icon {
            text-decoration: none;
        }

    }

    .hero__arrow {
        position: absolute;
        z-index: 5;
        bottom: 20px;
        right: 0;
        left: 0;
        margin: auto;
        color: $accent;
        font-size: 18pt;
    }


</style>
