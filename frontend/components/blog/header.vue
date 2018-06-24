<template>
    <header
            class="blog-post-header"
            :style="{
                '--url': `url(${ background })`
            }">
        <div class="blog-post-header__cover">
            <h1 class="blog-post-header__cover__title">{{ post.title }}</h1>
            <div class="blog-post-header__cover__meta">
                <div class="blog-post-header__cover__meta__tags">
                    <ul class="blog-post-header__cover__meta__tags__items">
                        <li v-for="tag in post.tags">{{ tag }}</li>
                    </ul>
                </div>
                <span class="blog-post-header__cover__meta__date">Published: {{ post.date }}</span>
                <font-awesome-icon icon="chevron-down" class="blog-post-header__cover__meta__arrow"/>
            </div>
        </div>
    </header>
</template>

<script>
  import Navbar from '@components/util/navbar'

  export default {
    name: 'blog-header',
    components: {
      Navbar
    },
    props: {
      background: {
        default: 'https://lorempixel.com/1440/400/'
      },
      post: {
        default: () => ({
          title: 'Responsive React Native styles',
          image: 'https://picsum.photos/400/250/',
          date: '16/04/18',
          tags: [
            'React',
            'React Native',
            'Javascript'
          ]
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '~scss/variables';
    @import '~scss/grid';

    .blog-post-header {
        position: relative;
        height: calc(100vh - 80px);
        width: 100%;
        background: var(--url);
        background-size: cover;
        @include for-tablet-portrait-up {
            height: 350px !important;
        }

        &__cover {
            height: 100%;
            width: 100%;
            background-color: rgba($primary, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;

            &__title {
                font-family: Poppins;
                color: white;
                font-size: 32pt;
                font-weight: 600;
                text-decoration: underline $accent;
                margin-left: 10px;
                margin-right: 10px;
                text-align: center;
                margin-bottom: 180px;
                @include for-tablet-portrait-up {
                    margin-bottom: 0px;
                }
            }

            &__meta {
                position: absolute;
                left: 10px;
                bottom: 15px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-direction: column;
                @include for-tablet-portrait-up {
                    flex-direction: row;
                }

                &__arrow {
                    font-size: 18pt;
                    margin-top: 30px;
                    margin-bottom: 5px;
                    font-size: 20pt;
                    color: white;
                    @include for-tablet-portrait-up {
                        display: none;
                    }
                }

                &__tags {
                    display: flex;
                    align-items: center;
                    list-style: none;

                    &__text {
                        font-family: Poppins;
                        font-size: 12pt;
                        color: white;
                    }

                    &__items {
                        display: flex;
                        align-items: center;

                        li {
                            margin-left: 5px;
                            margin-right: 5px;
                            padding: 5px;
                            background-color: white;
                            border-radius: 3px;
                            cursor: pointer;
                            user-select: none;

                            font-family: Poppins;
                            font-size: 9pt;
                            color: $accent;
                        }
                    }
                }

                &__date {
                    font-family: Poppins;
                    font-weight: 500;
                    font-size: 10pt;
                    color: white;
                    padding-right: 25px;
                    margin-top: 20px;
                    @include for-tablet-portrait-up {
                        margin-top: 0px;
                    }
                }
            }
        }
    }
</style>