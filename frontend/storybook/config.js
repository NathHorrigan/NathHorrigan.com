import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import Hero from '@components/home/hero.vue'

import { config, dom, library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faEnvelope, faChevronDown, faCaretUp, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faMedium, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

dom.watch()
const icons = [faCoffee, faFacebook, faMedium, faTwitter, faGithub, faEnvelope, faChevronDown, faCaretUp, faBars]
icons.map(icon => library.add(icon))

Vue.component('font-awesome-icon', FontAwesomeIcon)

function loadStories() {
  // You can require as many stories as you need.
  require('./stories/home')
  require('./stories/blog-post')
  require('./stories/buttons')
  require('./stories/util')
}

configure(loadStories, module);
