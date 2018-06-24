<template>
    <button :style="{
                '--color': color,
                '--thickness': thickness,
                '--hover-color': hoverColor,
            }"
            :class="{
                'hollow-button': true,
                'hollow-button--disabled': disabled
            }"
            :disabled="disabled"
            v-on:click="click">
        {{ title }}
    </button>
</template>

<script>
  export default {
    name: 'hollow-button',
    props: {
      title: {
        default: 'Button'
      },
      color: {
        default: '#1dd1a1'
      },
      hoverColor: {
        default: '#fff'
      },
      thickness: {
        default: '4px'
      },
      disabled: {
        default: false
      },
      click: {
        default: () => console.log("Button Pushed!")
      }
    }
  }
</script>

<style lang="scss">
    @import '~scss/variables';

    .hollow-button {
        $color: var(--color, $green);
        $textHover: var(--hover-color, white);
        $thickness: var(--thickness, 4px);

        width: auto;
        background: transparent;
        min-height: 40px;
        border: $thickness solid $color;
        color: $color;
        font-family: Poppins;
        font-size: 13pt;
        font-weight: 600;
        transition: color 0.3s, background-color 0.3s;
        user-select: none;
        cursor: pointer;
        padding-left: 20px;
        padding-right: 20px;

        &:hover {
            color: $textHover;
            background-color: $color;
        }
        &:focus {
            outline: 0;
        }

        &--disabled {
            color: $textHover !important;
            background-color: $color !important;
        }
    }
</style>