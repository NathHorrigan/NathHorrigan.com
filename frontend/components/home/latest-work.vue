<template>
    <section class="latest-work">
        <div class="latest-work__header">
            <h4 class="latest-work__header__title">My Latest Work</h4>
            <hollow-button
                    class="latest-work__header__button"
                    color="white"
                    hoverColor="#0F111A"
                    title="SEE MY OTHER WORK"/>
        </div>
        <h5 class="latest-work__summary">{{ summary }}</h5>
        <img class="latest-work__image" :src="image">
        <p class="latest-work__desc">{{ description }}</p>
        <section class="latest-work__links">
            <google-play-button
                    v-for="link in links"
                    v-if=" link.type == 'PLAY_STORE' "
                    :href="href"
                    class="latest-work__links__button"/>
            <app-store-button
                    v-for="link in links"
                    v-if=" link.type == 'APP_STORE' "
                    :href="href"
                    class="latest-work__links__button"/>
            <a v-for="link in links"
               v-if=" link.type == 'LINK' "
               target="_blank"
               :href="link.href"
               class="latest-work__links__button">
                <hollow-button
                        title="WEBSITE"
                        class="latest-work__links__button"/>
            </a>
        </section>
    </section>
</template>

<script>
  import HollowButton from '@components/buttons/hollow'
  import GooglePlayButton from '@components/buttons/google-play'
  import AppStoreButton from '@components/buttons/app-store'

  export default {
    name: 'latest-work',
    components: {
      HollowButton,
      GooglePlayButton,
      AppStoreButton
    },
    props: {
      summary: {
        default: '...bacon ipsum dolor amet swine spare ribs ham, pork belly shoulder brisket strip '
      },
      image: {
        default: 'http://via.placeholder.com/520x320'
      },
      description: {
        default: 'Bacon ipsum dolor amet swine spare ribs ham, pork belly shoulder brisket strip steak venison meatloaf. Filet mignon tongue cow, tenderloin kielbasa jowl alcatra sirloin corned beef tri-tip spare ribs drumstick biltong short loin doner. Porchetta rump pork, filet mignon short ribs salami ham hock turkey frankfurter ribeye shoulder pork chop capicola pancetta jowl. Bresaola venison biltong ham hock drumstick short ribs turkey. Strip steak hamburger sausage chuck pork loin pancetta spare ribs sirloin meatball boudin jerky andouille ham hock buffalo ball tip. Frankfurter meatloaf chicken, ribeye t-bone pig rump kevin swine drumstick. Picanha tri-tip jerky turducken short ribs leberkas. Bacon ipsum dolor amet swine spare ribs ham, pork belly shoulder brisket strip steak venison meatloaf. Filet mignon tongue cow, tenderloin kielbasa jowl alcatra sirloin corned beef tri-tip spare ribs drumstick biltong short loin doner. Porchetta rump pork, filet mignon short ribs salami ham hock turkey frankfurter ribeye shoulder pork chop capicola pancetta jowl. Bresaola venison biltong ham hock drumstick short ribs turkey. Strip steak hamburger sausage chuck pork loin pancetta spare ribs sirloin meatball boudin jerky andouille ham hock buffalo ball tip. Frankfurter meatloaf chicken, ribeye t-bone pig rump kevin swine drumstick. Picanha tri-tip jerky turducken short ribs leberkas.'
      },
      links: {
        default: () => [
          {type: 'PLAY_STORE', 'href': 'foo'},
          {type: 'APP_STORE', 'href': 'foo'},
          {type: 'LINK', 'href': 'foo'},
        ]
      }
    }
  }
</script>

<style lang="scss">
    @import '~scss/variables';
    @import '~scss/grid';

    .latest-work {
        background: $primary;
        display: grid;
        padding: 25px;

        &__header {
            grid-column: 1;
            grid-row: 1;
            @include for-tablet-landscape-up {
                grid-row: span 1;
                grid-column: span 2;
            }

            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
            padding-bottom: 45px;

            &__title {
                font-family: Poppins;
                font-weight: 600;
                font-size: 32pt;
                color: white;
            }
        }

        &__summary {
            grid-column: 1;
            grid-row: 2;
            @include for-tablet-landscape-up {
                grid-column: span 2;
                grid-row: 2;
            }

            margin-bottom: 50px;
            font-size: 14pt;
            font-family: Poppins;
            color: white;
        }

        &__image {
            grid-column: 1;
            grid-row: 3;
            margin-right: 40px;
            width: 100%;
            @include for-tablet-landscape-up {
                width: auto;
            }
        }

        &__desc {
            grid-column: 1;
            grid-row: 4;

            font-family: Poppins;
            color: white;
            line-height: 19px;
            font-size: 11pt;
            font-weight: 200;
            margin-top: 40px;

            @include for-tablet-landscape-up {
                grid-column: 2;
                grid-row: 3;
                margin: 0;

            }

        }

        &__links {
            grid-column: 1;
            grid-row: 5;
            @include for-tablet-landscape-up {
                grid-column: 2;
            }

            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 25px;

            &__button {
                height: 40px !important;
                margin-right: 20px;
            }
        }

    }
</style>