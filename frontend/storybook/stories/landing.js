import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import Hero from '@components/hero.vue';

storiesOf('FrontPage', module)
  .add('Hero', () => ({
    components: { Hero },
    template: '<hero />'
  }))