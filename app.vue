<template>
  <div id="app">
    <nuxt-page />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'nuxt3-first-app',
  htmlAttrs: {
    lang: 'ja'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'target-densitydpi=device-dpi, width=320, user-scalable=no' },
    { hid: 'description', name: 'description', content: '' },
    { name: 'format-detection', content: 'telephone=no' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  bodyAttrs: {
    class: 'body'
  }
})
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.body {
  width: 320px;
  margin: 0;
}
</style>
