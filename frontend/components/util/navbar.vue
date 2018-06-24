<template>
    <div class="navbar-container">
        <header :class="{
                    'navbar': true,
                    'navbar--pushed': showOffCanvas,
                    'navbar--transparent': transparent,
        }">
            <h1 class="navbar__logo">NathHorrigan</h1>
            <navlinks
                    textColor="white"
                    :links="links"
                    hideOnTablet="true"/>
            <font-awesome-icon
                    v-on:click="toggle"
                    icon="bars"
                    class="navbar__menu-icon"/>
        </header>
        <section :class="{
            'off-canvas': true,
            'off-canvas--open': showOffCanvas
        }">
            <navlinks
                    class="off-canvas__navlinks"
                    textColor="white"
                    :links="links"/>
        </section>
    </div>
</template>

<script>
  import Navlinks from '@components/util/navlinks'

  export default {
    name: 'navbar',
    components: {
      Navlinks
    },
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
      },
      transparent: {
        default: false
      }
    },
    data() {
      return {
        showOffCanvas: false
      }
    },
    methods: {
      toggle() {
        this.showOffCanvas = !this.showOffCanvas
        console.log('foo')
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '~scss/variables';
    @import '~scss/grid';
    
    $off-canvas-height: 250px;

    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 80px;
        background-color: $primary;
        user-select: none;
        transition: margin-top 0.3s ease;

        &--pushed {
            margin-top: $off-canvas-height;
        }

        &--transparent {
            background-color: transparent !important;
        }

        &__logo {
            color: white;
            font-size: 16pt;
            width: auto;
            font-family: Poppins;
            font-weight: 600;
            margin-left: 20px;
            user-select: none;

            &:hover {
                cursor: pointer;
                border-bottom: 4px solid $green;
            }
        }

        &__menu-icon {
            color: white;
            font-size: 18pt;
            margin-right: 35px;
            cursor: pointer;
            @include for-tablet-landscape-up {
                display: none;
            }
        }
    }

    .off-canvas {
        display: flex;
        align-items: center;
        width: 100%;
        height: $off-canvas-height;
        position: absolute;
        top: -$off-canvas-height;
        transition: top 0.3s ease;
        background-color: lighten($primary, 5%);

        &--open {
            top: 0;
        }

        &__navlinks {
            align-items: flex-start !important;
        }
    }
</style>