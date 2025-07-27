<template>
  <div class="container mx-auto">
    <h1 class="font-medium text-2xl ml-5">Favorite Recipes</h1>
    <RecipeList :recipes="store.favotiteRecipes" />
  </div>
</template>

<script setup lang="ts">
import RecipeList from '@/components/RecipeList.vue';
import { useRecipeStore } from '@/stores/recipe'
const store = useRecipeStore();
</script>

<style scoped></style>
