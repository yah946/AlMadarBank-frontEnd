<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import FooterView from './components/FooterView.vue'
</script>

<template>
  <nav-bar></nav-bar>
  <main class="p-8 min-h-[70vh] mx-auto max-w-6xl">
    <router-view />
  </main>
  <FooterView />
</template>
<style scoped>

</style>
