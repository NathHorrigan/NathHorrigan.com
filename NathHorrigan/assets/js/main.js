import '@styles/main.scss' // Global .SCSS styles
import Vue from 'vue'
import WebFont from 'webfontloader'

// Components
import Landing from '@components/hero.vue'

const app = new Vue({
  el: '#app',
  components: {
    Landing
  }
})