import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import BlogArticle from '@components/blog/article.vue'
import BlogHeader from '@components/blog/header.vue'
import "../../scss/_reset.scss"

storiesOf('Blog Post', module)
  .add('Header', () => ({
    components: { BlogHeader },
    template: '<blog-header />'
  }))
  .add('Article', () => ({
    components: { BlogArticle },
    template: '<blog-article />'
  }))
