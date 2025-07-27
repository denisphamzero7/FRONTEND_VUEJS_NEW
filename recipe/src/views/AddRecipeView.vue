<template>
  <div class="p-6 max-w-md mx-auto bg-white rounded-lg shadow">
    <h1 class="text-2xl font-semibold text-gray-800 mb-4">AddRecipe</h1>
    <form
      @submit.prevent="addRecipe()"
      class="space-y-4"
    >
      <input
        type="text"
        v-model="name"
        placeholder="name"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
      />
      <textarea
        v-model="description"
        placeholder="Recipe description"
        class="w-full h-24 px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring focus:border-blue-300"
      > </textarea>
      <button
        type="submit"
        class="w-full py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring"
      >
        Add
      </button>
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
