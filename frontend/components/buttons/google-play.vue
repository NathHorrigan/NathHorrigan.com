<template>
    <a class="google-play-button"
       :href="href"
       target="_blank">
        <img class="google-play-button__logo"
             src="~images/buttons/google-play.svg"/>
    </a>
</template>

<script>
  export default {
    name: 'google-play',
    props: {
      href: {
        default: 'https://play.google.com/store'
      }
    }
  }
</script>

<style lang="scss">
    .google-play-button {
        display: inline-block;
        width: 135px;
        height: auto;
    }
</style>