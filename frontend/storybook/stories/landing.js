import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import Landing from '@components/landing.vue';

storiesOf('FrontPage', module)
  .add('LandingSection', () => ({
    components: { Landing },
    template: '<landing-section />'
  }))