<template>
  <div>
    <main>
      <h1>recipe Home</h1>
      <div>
        <input type="text" v-model="searchQuery" />
      </div>
      <!-- <nav>
        <RouterLink :to="{name:'recipe',params:{id:1}}"> recipe1</RouterLink>
        <RouterLink :to="{name:'recipe',params:{id:2}}"> recipe2</RouterLink>
      </nav> -->
      <nav v-if="filteredRecipes.length > 0">
        <ul >
          <li v-for="recipe in filteredRecipes" :key="recipe.id">
            <RouterLink :to="{ name: 'recipe', params: { id: recipe.id } }">
              {{ recipe.name }}</RouterLink
            >
          </li>
        </ul>
      </nav>
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
