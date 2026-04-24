<template> 
    <header class="flex justify-between items-center h-16 pl-8 pr-8 bg-slate-900 text-slate-50">
        <h1 class="text-3xl cursor-pointer font-semibold">AlMadarBank</h1>
        <nav class="hidden md:flex gap-8 text-2xl">
            <router-link to="/home" class="hover:border-b hover:text-slate-300">Home</router-link>
            <router-link to="/career" class="hover:border-b hover:text-slate-300">Career</router-link>
            <router-link to="/support" class="hover:border-b hover:text-slate-300">Support</router-link>
            <router-link to="/about" class="hover:border-b hover:text-slate-300">About</router-link>
        </nav>
        <div class="flex gap-4 text-2xl">
            <router-link to="/login" class="hover:border px-2 py-1.5 rounded-xl">login</router-link>
            <router-link to="/register" class="border px-2 py-1.5 rounded-xl hover:text-black hover:bg-slate-50">register</router-link>
        </div>
    </header>
</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>
<style scoped lang="scss">
a {
  &.router-link-active {
    background-color: white;
    padding: 2px;
    border-radius: 12px;
    color:black
  }
}
</style>