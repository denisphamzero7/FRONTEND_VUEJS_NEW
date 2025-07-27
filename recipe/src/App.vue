<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
const isActive = ref(false)

</script>

<template>
  <div class="h-full bg-gray-200 min-h-screen" >
    <header>
    <nav>
      <ul>
        <li class=" flex justify-center gap-4 bg-yellow-200 text-2xl font-medium">
          <RouterLink :to="{name:'home'}">Home</RouterLink>
          <RouterLink  :to="{name:'favorites'}">Favorites</RouterLink>
          <RouterLink :to="{name:'addrecipe'}">Add Recipe</RouterLink>
          <!-- <RouterLink :to="{name:'about'}">Favorites</RouterLink> -->
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
  </div>
</template>

<style scoped>

</style>
