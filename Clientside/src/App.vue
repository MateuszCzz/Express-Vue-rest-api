<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <header>
      <Navbar />
    </header>

    <main class="min-h-full justify-evenly flex">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
body,main {
  background:
    /* top, transparent black, faked with gradient */ 
    linear-gradient(
      rgba(0, 0, 0, 0.85), 
      rgba(0, 0, 0, 0.85)
    ),
    /* bottom, image */
    url(https://images8.alphacoders.com/544/thumb-1920-544270.jpg);
  min-height: 100%;
  height: 80rem;
  margin-top: -1.5rem;
  background-repeat: no-repeat;
  background-position: top;
  background-color: #000000;
}


</style>
