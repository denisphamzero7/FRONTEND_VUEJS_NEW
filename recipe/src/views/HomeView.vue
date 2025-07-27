<template>
  <div>
    <main><h1> recipe Home</h1>
      <div>
        <input type="text" v-model="searchquery">
      </div>
      <!-- <nav>
        <RouterLink :to="{name:'recipe',params:{id:1}}"> recipe1</RouterLink>
        <RouterLink :to="{name:'recipe',params:{id:2}}"> recipe2</RouterLink>
      </nav> -->
    <nav v-if="filteredRecipes.length>0">
      <ul>
        <li v-for="recipe in filteredRecipes" :key="recipe.id" >
          <RouterLink :to="{name:'recipe',params:{id:recipe.id}}" > {{ recipe.name }}</RouterLink>
        </li>
      </ul>
    </nav>
    <div v-else>no recipes</div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/repice';
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
const recipeStore = useRecipeStore()
const searchquery = ref('');
const filteredRecipes = computed(()=> recipeStore.recipes.filter(recipe=>recipe.name.toLocaleLowerCase().includes(searchquery.value.toLocaleLowerCase())))
</script>

<style scoped></style>
