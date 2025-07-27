<template>
  <div>
    <main class="mx-auto container p-4 space-y-6">
      <h1 class="text-2xl font-bold text-gray-800">recipe Home</h1>

      <div>
        <input
          type="text"
          v-model="searchQuery"
          class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <!-- <nav v-if="filteredRecipes.length > 0">
        <ul class="space-y-2">
          <li
            v-for="recipe in filteredRecipes"
            :key="recipe.id"
            class="text-blue-600 hover:underline"
          >
            <RouterLink :to="{ name: 'recipe', params: { id: recipe.id } }">
              {{ recipe.name }}
            </RouterLink>
          </li>
        </ul>
      </nav> -->

      <RecipeList :recipes="filteredRecipes" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
import RecipeList from '@/components/RecipeList.vue';
const recipeStore = useRecipeStore();
const searchQuery = ref('');
const filteredRecipes = computed(
  () => recipeStore.filteredRecipes(searchQuery.value)
);
</script>

<style scoped></style>
