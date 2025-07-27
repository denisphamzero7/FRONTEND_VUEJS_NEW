<template>
  <div>
    <h1>AddRecipe</h1>
    <form @submit.prevent="addRecipe()">
      <input type="text" v-model="name" placeholder="name" required />
      <textarea v-model="description" placeholder="Recipe description"> </textarea>
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const store = useRecipeStore();
const name = ref('');
const description = ref('');
const addRecipe = () => {
  const recipe = store.addRecipe({
    name: name.value,
    description: description.value,
  });
  router.push({
    name: 'recipe',
    params: {
      id: recipe.id,
    },
  });
};
</script>

<style scoped></style>
