<template>
    <div class="footer">
        <section class="footer__newsletter">
            <h3 class="footer__newsletter__text">Subscribe to my Newsletter!</h3>
            <div class="footer__newsletter__form">
                <input placeholder="Email:"
                       class="footer__newsletter__form__input"
                       v-model="email"
                       :disabled="subscribed"/>

                <hollow-button
                        class="blog__header__button"
                        color="#0984e3"
                        :click="subscribe"
                        :disabled="subscribed"
                        :title="newsletterLabel"/>
            </div>
        </section>

        <section class="footer__nav">
            <navlinks
                    textColor="white"
                    :links="links" />
        </section>

        <span class="footer__tagline">
            Built with
            <a class="footer__tagline__link" href="https://wagtail.io/" target="_blank">Wagtail</a>
            &
            <a class="footer__tagline__link" href="https://vuejs.org/" target="_blank">VueJS</a>
        </span>
    </div>
</template>

<script>
  import HollowButton from '@components/buttons/hollow'
  import Navlinks from '@components/util/navlinks'

  export default {
    components: {
      HollowButton,
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
      formEndpoint: {
        default: '/'
      }
    },
    data: function () {
      return {
        subscribed: false,
        email: ''
      }
    },
    computed: {
      newsletterLabel: function () {
        return (this.subscribed) ? 'SUBSCRIBED' : 'SUBSCRIBE'
      }
    },
    methods: {
      subscribe () {
        this.subscribed = true
        alert(this.email)
      },
      updateEmail (email) {
        console.log(email)
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "~scss/variables";
    @import "~scss/grid";

    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #090D12;
        min-height: 300px;

        &__newsletter {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 20px;

            &__text {
                color: white;
                font-family: Poppins;
                font-size: 14pt;
                font-weight: 600;
                margin-top: 30px;
                margin-bottom: 30px;

                @include for-tablet-landscape-up {
                    font-size: 18pt;
                }
            }

            &__form {
                display: flex;
                flex-direction: column;
                height: 90px;
                width: 330px;
                @include for-tablet-landscape-up {
                    flex-direction: row;
                    height: 45px !important;
                    width: 525px;
                }

                &__input {
                    height: 100%;
                    width: calc(100% - 10px);
                    background-color: rgba(grey, 0.1);
                    border: none;
                    color: white;
                    font-size: 13pt;
                    font-family: Poppins;
                    font-weight: 300;
                    padding: 0;
                    margin: 0;
                    padding-left: 10px;
                    &:focus {
                        outline: 0;
                    }
                }

                &__button {
                    height: 100% !important;
                    width: 100% !important;
                    border: none;
                    margin: 0;
                }
            }
        }

        &__nav {
            display: flex;
            justify-content: center;
            align-items: center;
            height: auto;
            margin: auto;
            padding: 0 !important;
            margin-bottom: 40px;

            &__list {
                @include for-phone-only {
                    display: none;
                }
                list-style: none;
                display: flex;
                flex-direction: row;
                // justify-content: center;
                align-items: center;
                padding: 0;
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
                    color: white;
                    font-size: 12pt;
                    font-family: Poppins, sans-serif;
                    font-weight: 600;
                    text-decoration: none;
                    user-select: none;
                    &:hover {
                        /*text-decoration: underline;*/
                        border-bottom: 3px solid $accent;
                        /*text-decoration-line: 1;*/
                    }
                }
            }
        }

        &__tagline {
            display: flex;
            align-items: center;
            justify-content: space-around;
            color: white;
            font-family: Poppins;
            padding-bottom: 20px;

            &__link {
                text-decoration: underline;
                font-weight: 600;
                color: $green;
                padding-left: 5px;
                padding-right: 5px;
            }
        }
    }
</style>