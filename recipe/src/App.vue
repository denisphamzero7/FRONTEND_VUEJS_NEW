<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <ul class="flex gap-4">
        <li>
          <RouterLink :to="{ name: 'favorites' }" v-slot="{ isActive }">
            <span :class="{ isActive }">Favorites</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'addrecipe' }" v-slot="{ isActive }">
            <span :class="{ isActive }">Add Recipe</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'about' }" v-slot="{ isActive }">
            <span :class="{ isActive }">About</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.isActive {
  color: rgb(0, 255, 213);
  font-weight: bold;
}
</style>
