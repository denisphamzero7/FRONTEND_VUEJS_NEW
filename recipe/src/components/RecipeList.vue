<template>
  <div class="p-4">
    <nav
      v-if="recipes.length > 0"
      class="bg-white rounded-lg shadow-md p-4 "
    >
      <ul class="space-y-2">
        <li
          v-for="recipe in recipes"
          :key="recipe.id"
          class="rounded hover:bg-gray-100"
        >
          <RouterLink
            :to="{ name: 'recipe', params: { id: recipe.id } }"
            class="block px-3 py-2 text-blue-600 hover:underline"
          >
            {{ recipe.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>

    <div v-else class="text-center text-gray-500 italic">
      No recipes found!
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Recipe } from '@/stores/recipe';
import { RouterLink } from 'vue-router';
defineProps<{
  recipes: Recipe[];
}>();
</script>
