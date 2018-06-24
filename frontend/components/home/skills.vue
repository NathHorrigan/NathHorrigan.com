<template>
    <div class="skills">
        <h2 class="skills__header">Skills</h2>
        <section class="skills__content">
            <section v-for="type in skills" class="skills__content__type">
                <h4 class="skills__content__type__header">{{ type.name }}</h4>
                <ul class="skills__content__type__list">
                    <li v-for="skill in type.skills" class="skills__content__type_listitem">
                        <span class="skills__content__type__skill">- {{ skill }}</span>
                    </li>
                </ul>
            </section>
        </section>
        <timeline class="skills__timeline" width="100%" />
    </div>
</template>

<script>
    import Timeline from '@components/util/timeline'
    export default {
        components: {
        },
        props: {
          skills: {
            default: () => ([
              {
                name: 'Web Languages',
                skills: [
                  'HTML',
                  'CSS (including SCSS)',
                  'Javascript (ES6, Typescript)',
                  'PHP',
                  'Python'
                ]
              },

              {
                name: 'Web Languages',
                skills: [
                  'HTML',
                  'CSS (including SCSS)',
                  'Javascript (ES6, Typescript)',
                  'PHP',
                  'Python'
                ]
              },

              {
                name: 'Web Languages',
                skills: [
                  'HTML',
                  'CSS (including SCSS)',
                  'Javascript (ES6, Typescript)',
                  'PHP',
                  'Python'
                ]
              }
            ])
          }
        },
    }
</script>

<style lang="scss" scoped>
    @import '~scss/variables';
    @import '~scss/grid';

    .skills {
        min-height: 300px;
        padding: 20px;
        padding-top: 25px;
        background-color: $green;

        &__header {
            font-family: Poppins;
            font-weight: 600;
            font-size: 32pt;
            color: $white;
            padding-bottom: 50px;
        }

        &__content {
            display: grid;
            grid-template: auto / auto;
            @include for-tablet-portrait-up {
                grid-template: auto / auto auto;
            }
            @include for-desktop-up {
                grid-template: auto / auto auto auto auto;
            }

            &__type {
                margin-bottom: 40px;
            }

            &__type__header {
                font-size: 16pt;
                color: white;
                font-family: Poppins,serif;
                font-weight: 500;
                padding-bottom: 10px;
                text-decoration: underline;
            }

            &__type_listitem {
                padding-bottom: 5px;
            }

            &__type__skill {
                font-size: 11pt;
                color: white;
                font-family: Poppins, serif;
            }

        }

    }
</style>