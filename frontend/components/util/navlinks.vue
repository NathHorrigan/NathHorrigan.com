<template>
    <ul :class="{
            'navlinks': true,
            'navlinks--hide-small': hideOnMobile,
            'navlinks--hide-medium': hideOnTablet
    }">
        <li v-for="(link, index) in links" class="navlinks__link" v-bind:key="index">
            <a :style="{
                    '--text-color': textColor,
                     '--border-color': borderColor,
                }"
               :href="link.href"> {{ link.label }} </a>
        </li>
    </ul>
</template>

<script>
  export default {
    name: 'navlinks.vue',
    props: {
      textColor: {
        default: 'black'
      },
      borderColor: {
        default: '#0984e3'
      },
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
      hideOnMobile: {
        default: false
      },
      hideOnTablet: {
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '~scss/variables';
    @import '~scss/grid';

    .navlinks {
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
        padding: 0;

        @include for-phone-only {
            flex-direction: column;
        }

        &__link {
            padding-left: 20px;
            padding-right: 20px;
            @include for-phone-only {
                padding-top: 10px;
                padding-bottom: 10px;
            }

            cursor: pointer;
            a {
                $text-color: var(--text-color, black);
                $border-color: var(--border-color, $accent);

                color: $text-color;
                font-size: 12pt;
                font-family: Poppins, sans-serif;
                font-weight: 600;
                text-decoration: none;
                user-select: none;
                &:hover {
                    /*text-decoration: underline;*/
                    border-bottom: 3px solid $border-color;
                    /*text-decoration-line: 1;*/
                }

            }
        }

        &--hide-small {
            @include for-phone-only {
                display: none;
            }
        }

        &--hide-medium {
            display: none;
            @include for-tablet-landscape-up {
                display: flex;
            }
        }
    }
</style>