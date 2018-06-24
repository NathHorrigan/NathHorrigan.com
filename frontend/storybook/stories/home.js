import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import Hero from '@components/home/hero.vue'
import About from '@components/home/about.vue'
import Skills from '@components/home/skills.vue'
import Blog from '@components/home/blog.vue'
import LatestWork from '@components/home/latest-work.vue'
import FooterSection from '@components/home/footer.vue'
import "../../scss/_reset.scss"

storiesOf('Home', module)
  .add('Hero', () => ({
    components: { Hero },
    template: '<hero />'
  }))
  .add('About', () => ({
    components: { About },
    template: '<about />'
  }))
  .add('Skills', () => ({
    components: { Skills },
    template: '<skills />'
  }))
  .add('Blog Preview', () => ({
    components: { Blog },
    template: '<blog />'
  }))
  .add('Latest Work', () => ({
    components: { LatestWork },
    template: '<latest-work />'
  }))
  .add('Footer', () => ({
    components: { 'footer-section': FooterSection },
    template: '<footer-section />'
  }))
