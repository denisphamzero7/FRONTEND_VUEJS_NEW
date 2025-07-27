<template>
  <div>
    <main><h1>Home</h1>
      <nav>
        <RouterLink :to="{name:'recipe',params:{id:1}}"> recipe1</RouterLink>
        <RouterLink :to="{name:'recipe',params:{id:2}}"> recipe2</RouterLink>
      </nav>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<style scoped></style>
