<template>
    <div class="timeline"
         :style="{
            '--columns': columns,
            '--height': height,
            '--width': width,
         }">

        <div v-for="(event, index) in history"
             class="timeline__segment"
             :class="{
               'timeline__segment': true,
               'timeline__segment--first': index === 0,
               'timeline__segment--last': index === (history.length - 1),
               'timeline__segment--even': index % 2 === 0,
             }">
            <font-awesome-icon
                    icon="caret-up"
                    class="timeline__segment__arrow"/>
        </div>

        <div v-for="(event, index) in history"
             :style="{
                '--index': index
             }"
             :class="{
                'timeline__segment__desc': true,
                'timeline__segment__desc--even': index % 2 === 0,
             }">
            <h4 class="timeline__segment__desc__title">{{ event.title }}</h4>
            <span class="timeline__segment__desc__dates">{{ formatDate(event.start) + ' - ' + formatDate(event.end) }}</span>
            <p class="timeline__segment__desc__text">{{ event.content }}</p>
        </div>
    </div>
</template>

<script>
  import day from 'dayjs'

  export default {
    name: 'timeline',
    props: {
      width: {
        default: () => '800px'
      },
      height: {
        default: () => '20px'
      },
      history: {
        default: () => ([
          {
            start: new Date('1 January 2018').getTime(),
            end: new Date('5 January 2018').getTime(),
            title: 'Wordpress Developer',
            content: 'Bacon ipsum dolor amet swine spare ribs ham, pork belly shoulder brisket strip steak venison meatloaf.'
          },
          {
            start: new Date('6 January 2018').getTime(),
            end: new Date('10 January 2018').getTime(),
            title: 'React Native Developer',
            content: 'Bacon ipsum dolor amet swine spare ribs ham, pork belly shoulder brisket strip steak venison meatloaf.'
          },
          {
            start: new Date('11 January 2018').getTime(),
            end: new Date('15 January 2018').getTime(),
            title: 'Wagtail Developer',
            content: 'Bacon ipsum dolor amet swine spare ribs ham, pork belly shoulder brisket strip steak venison meatloaf.'
          },
          {
            start: new Date('16 January 2018').getTime(),
            end: new Date('20 January 2018').getTime(),
            title: 'Laravel Developer',
            content: 'Bacon ipsum dolor amet swine spare ribs ham, pork belly shoulder brisket strip steak venison meatloaf.'
          },
        ])
      },
      relativeWidths: {
        default: () => false
      }
    },

    computed: {
      columns: function () {
        if (this.relativeWidths) {

        } else {
          let cols = ''
          for (let event of this.history) {
            cols = cols + ' ' + ((100 / this.history.length) + '%')
          }
          return cols
        }
      }
    },

    methods: {
      eventWidth: function (event) {
        let width = 0
        if (this.relativeWidths) {
          const historyLength = this.history
            .map(event => (event.end - event.start))
            .reduce((x, y) => x + y)
          const eventLength = event.end - event.start
          width = ((eventLength / historyLength) * 100 + '%')
        } else {
          width = (100 / this.history.length) + '%'
        }
        return width
      },
      formatDate: function (date) {
        return day(date).format('MMMM YYYY')
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '~scss/variables';
    @import '~scss/grid';

    .timeline {
        $hWidth: var(--width); // Horizontal
        $hHeight: var(--height); // Horizontal
        $vWidth: $hHeight; // Vertical
        $vHeight: $hWidth; // Vertical

        display: grid;
        grid-template-columns: var(--columns);
        grid-template-rows: auto $hHeight auto;

        width: $hWidth;
        padding-top: 50px;
        padding-bottom: 50px;
        @include for-phone-only {
            grid-template-columns: auto $vHeight auto;
            grid-template-rows: var(--columns);
            height: $vHeight;
            width: $vWidth;
        }

        &__segment {
            position: relative;
            background-color: $accent;
            @include for-phone-only {
                grid-column-start: 1;
                grid-column-end: 1;
                width: $vWidth;
                height: 100%;
                min-height: 140px;
            }
            @include for-tablet-portrait-up {
                grid-row-start: 2;
                grid-row-end: 2;
                height: $hHeight;
                width: 100%;
                min-width: 100px;
            }

            &__arrow {
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                font-size: 24pt;
                color: $accent;
                @include for-phone-only {
                    top: 0;
                    bottom: 0;
                    right: -35px;
                    font-size: 45pt;
                    transform: rotate(90deg);
                }
                @include for-tablet-portrait-up {
                    bottom: -20px;
                    transform: rotate(180deg);
                }
            }

            &--first {
                @include for-phone-only {
                    border-radius: $vWidth $vWidth 0px 0px;
                }
                @include for-tablet-portrait-up {
                    border-radius: $hHeight 0px 0px $hHeight;
                }
            }

            &--last {
                @include for-phone-only {
                    border-radius: 0px 0px $vWidth $vWidth;
                }
                @include for-tablet-portrait-up {
                    border-radius: 0px $hHeight $hHeight 0px;
                }
            }

            &--even {
                background-color: $green;
                .timeline__segment__arrow {
                    color: $green;
                    @include for-phone-only {
                        right: -35px;
                        transform: rotate(90deg);
                    }
                    @include for-tablet-portrait-up {
                        top: -20px;
                        bottom: auto;
                        transform: rotate(0deg);
                    }
                }
            }

        }

        &__segment__desc {
            $index: calc(var(--index) + 1);

            @include for-phone-only {
                grid-column: 2 / span 2;
                grid-row: $index;

                display: flex;
                justify-content: center;
                flex-direction: column;
                min-width: 300px;
                margin-left: 40px;
            }
            @include for-tablet-portrait-up {
                grid-column-start: $index;
                grid-column-end: $index;
                grid-row-start: 3;
                grid-row-end: 3;
                margin-top: 25px;

                text-align: center;
            }

            color: $white;
            font-family: Poppins, sans-serif;

            &--even {
                @include for-tablet-portrait-up {
                    grid-row-start: 1;
                    grid-row-end: 1;
                    margin-top: 0px;
                    margin-bottom: 20px;
                }
            }

            &__title {
                font-size: 16pt;
                padding-bottom: 15px;
            }

            &__dates {
                padding-bottom: 10px;
            }

            &__text {
                padding-top: 15px;
                font-size: 10pt;
                @include for-tablet-portrait-up {
                    width: 80%;
                    max-width: 300px;
                    margin: auto;
                }
            }
        }

    }
</style>
