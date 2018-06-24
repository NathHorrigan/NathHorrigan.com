import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import Timeline from '@components/util/timeline.vue'
import Navlinks from '@components/util/navlinks.vue'
import Navbar from '@components/util/navbar.vue'
import "../../scss/_reset.scss"

storiesOf('Util', module)
  .add('Navlinks', () => ({
    components: { Navlinks },
    template: '<navlinks />'
  }))
  .add('Navbar', () => ({
    components: { Navbar },
    template: '<navbar />'
  }))
  .add('Timeline', () => ({
    components: { Timeline },
    template: '<timeline />'
  }))
