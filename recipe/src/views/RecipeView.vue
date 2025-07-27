<template>
  <div class="p-6 max-w-3xl mx-auto space-y-6">
    <nav class="bg-white rounded-lg shadow p-4 flex items-center justify-between">
      <h1 class="text-xl font-semibold text-gray-800">recipe:{{ $route.params.id }}</h1>
      <ul class="flex space-x-4">
        <li>
          <RouterLink
            :to="{ name: 'recipe', params: { id: 1 } }"
            class="text-blue-600 hover:underline"
          >
            Recipe 1
          </RouterLink>
          <RouterLink
            :to="{ name: 'recipe', params: { id: 2 } }"
            class="ml-4 text-blue-600 hover:underline"
          >
            Recipe 2
          </RouterLink>
        </li>
      </ul>
    </nav>

    <div class="bg-white rounded-lg shadow p-6 space-y-4">
      <h1 class="text-2xl font-bold text-gray-900">{{ recipe?.name }}</h1>
      <h2 class="text-gray-700">{{ recipe?.description }}</h2>
      <div>
        <RouterLink
          :to="{ name: 'edit-recipe', params: { id: recipe?.id } }"
          class="inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Edit
        </RouterLink>
      </div>
      <button
        v-if="recipe"
        @click="recipeStore.toggleFavorite(recipe.id)"
        class="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 focus:outline-none"
      >
        {{ isFavorite ? 'Remove from favorites' : 'Add to favorites' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { computed, onMounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
const route = useRoute();

const recipeStore = useRecipeStore();
const recipe = computed(() => recipeStore.getRecipeById(route.params.id as string));

const isFavorite = computed(
  () => recipe.value ? recipeStore.isFavorite(recipe.value.id) : false
);
// console.log('lấy param: ',route.params.id);
// watch(()=>route.params.id,()=> console.log('fetching data'),{deep:true})

// onMounted(()=>{
//   console.log('fetch data')
// })
</script>

<style scoped></style>
