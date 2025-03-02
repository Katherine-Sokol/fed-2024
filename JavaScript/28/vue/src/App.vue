<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <img
      src="/sun.png"
      class="sun"
      alt="sun"
    />
  </div>
  <HelloWorld msg="Hello world!" />
</template>

<style scoped>
.sun {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.sun:hover {
  filter: drop-shadow(0 0 2em rgba(250, 255, 100, 0.99));
}
</style>
