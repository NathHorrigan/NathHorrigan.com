<template>
    <section class="blog">
        <div class="blog__header">
            <h4 class="blog__header__title">Blog Posts</h4>
            <hollow-button
                    class="blog__header__button"
                    color="#0984e3"
                    title="SEE ALL POSTS"/>
        </div>
        <div class="blog__posts">
            <div class="blog__post"
                 v-if="posts"
                 v-for="post in posts"
                 :style="{
                    '--background': `url(${post.image})`
                }">
                <section class="blog__post__cover">
                    <h4 class="blog__post__cover__title">{{ post.title }}</h4>
                    <div class="blog__post__cover__tags">
                        <!--<span class="blog__post__cover__tags__text">Tags:</span>-->
                        <ul class="blog__post__cover__tags__items">
                            <li v-for="tag in post.tags">{{ tag }}</li>
                        </ul>
                    </div>
                    <span class="blog__post__cover__date">Published: {{ post.date }}</span>
                    <div class="blog__post__cover__footer">
                        <hollow-button
                                class="blog__post__cover__button"
                                color="white"
                                hoverColor="#0984e3"
                                title="VIEW"/>
                    </div>
                </section>
            </div>

            <div v-if="posts.length < 3"
                 v-for="n in Math.abs(3 - posts.length)"
                 class="blog__post--dummy"></div>
        </div>
    </section>
</template>

<script>
  import HollowButton from '@components/buttons/hollow'

  export default {
    name: 'blog-section',
    components: {
      HollowButton
    },
    props: {
      posts: {
        default: () => [
          {
            title: 'Responsive React Native styles',
            image: 'https://picsum.photos/400/250/',
            date: '16/04/18',
            tags: [
              'React',
              'React Native',
              'Javascript'
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '~scss/variables';
    @import '~scss/grid';

    .blog {
        background: white;

        &__header {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
            margin: 10px;
            margin-top: 25px;
            margin-bottom: 25px;

            &__title {
                font-family: Poppins;
                font-weight: 600;
                font-size: 32pt;
                color: $accent;
            }

            &__button {
                margin-right: 25px;
            }

        }

        &__posts {
            display: grid;
            grid-template: auto / auto;
            @include for-tablet-portrait-up {
                grid-template: auto / auto auto;
            }
            @include for-tablet-landscape-up {
                grid-template: auto / auto auto auto;
            }
        }

        &__post {
            $background: var(--background, 'url(http://via.placeholder.com/400x250)');

            position: relative;
            height: 250px;
            background-image: $background;
            background-size: cover;
            margin: 10px;

            @include for-phone-only {
                .blog__post__cover {
                    opacity: 0.95;
                    height: 100%;
                    justify-content: flex-start;

                    &__title {
                        padding-top: 15px;
                    }
                    &__date {
                        display: block;
                    }
                    &__tags {
                        display: flex;
                    }
                    &__footer {
                        display: flex;
                    }
                }
            }

            &:hover {
                .blog__post__cover {
                    opacity: 0.95;
                    height: 100%;
                    justify-content: flex-start;

                    &__title {
                        padding-top: 15px;
                    }
                    &__date {
                        display: block;
                    }
                    &__tags {
                        display: flex;
                    }
                    &__footer {
                        display: flex;
                    }
                }
            }

            &__cover {
                display: flex;
                flex-direction: column;
                justify-content: center;
                position: absolute;
                bottom: 0;
                width: calc(100% - 20px);
                height: 80px;
                background-color: $accent;
                opacity: 0.9;
                transition: opacity 0.25s, height 0.25s, justify-content 0.25s;
                padding-left: 10px;
                padding-right: 10px;

                &__title {
                    color: white;
                    font-family: Poppins;
                    font-weight: 400;
                    font-size: 20pt;
                    line-height: 35px;
                }

                &__tags {
                    display: none;
                    align-items: center;
                    list-style: none;
                    margin-top: 25px;
                    margin-bottom: 10px;

                    &__text {
                        font-family: Poppins;
                        font-size: 13pt;
                        color: white;
                    }

                    &__items {
                        display: flex;
                        align-items: center;

                        li {
                            margin-right: 10px;
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
                    display: none;
                    padding-top: 10px;
                    font-family: Poppins;
                    font-weight: 500;
                    font-size: 10pt;
                    color: white;
                }

                &__footer {
                    display: none;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    justify-content: flex-end;
                }

                &__button {
                    margin: 10px;
                    margin-left: 0px;
                }

            }

            &--dummy {
                @extend .blog__post;
                background: #222f3e;
                opacity: 0.1;
            }
        }

    }
</style>