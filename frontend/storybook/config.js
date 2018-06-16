import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import Landing from '@components/hero.vue'
import { config, dom, library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faMedium, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

dom.watch()
const icons = [faCoffee, faFacebook, faMedium, faTwitter, faGithub, faEnvelope, faChevronDown]
icons.map(icon => library.add(icon))

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Register custom components.
Vue.component('landing-section', Landing);

function loadStories() {
  // You can require as many stories as you need.
  require('./stories/landing');
}

configure(loadStories, module);
