import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import HollowButton from '@components/buttons/hollow.vue'
import GooglePlayButton from '@components/buttons/google-play.vue'
import AppStoreButton from '@components/buttons/app-store.vue'
import "../../scss/_reset.scss"

storiesOf('Buttons', module)
  .add('Hollow Button', () => ({
    components: { HollowButton },
    template: '<hollow-button />'
  }))
  .add('Google Play', () => ({
    components: { GooglePlayButton },
    template: '<google-play-button />'
  }))
  .add('Apple App Store', () => ({
    components: { AppStoreButton },
    template: '<app-store-button />'
  }))
