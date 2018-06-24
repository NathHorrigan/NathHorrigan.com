<template>
    <a class="app-store-button"
       :href="href"
       target="_blank">
        <img class="app-store-button__logo"
             src="~images/buttons/app-store.svg"/>
    </a>
</template>

<script>
  export default {
    name: 'app-store',
    props: {
      href: {
        default: 'https://itunes.apple.com/us/genre/ios/id36?mt=8'
      }
    }
  }
</script>

<style lang="scss">
    .app-store-button {
        display: inline-block;
        width: 120px;
        height: auto;
    }
</style>