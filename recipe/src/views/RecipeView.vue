<template>
    <div>
      <nav>
      <h1>recipe:{{ $route.params.id }}</h1>
      <ul>
        <li>
          <RouterLink :to="{name:'recipe',params:{id:1}}">Recipe 1</RouterLink>
          <RouterLink :to="{name:'recipe',params:{id:2}}">Recipe 2</RouterLink>
        </li>
      </ul>
    </nav>
    <h1>{{ recipe?.name }}</h1>
    <h2>{{ recipe?.description }}</h2>
    <div>
      <RouterLink :to="{ name: 'edit-recipe', params: { id: recipe?.id } }">Edit</RouterLink>
    </div>
    </div>



</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/repice';
import { computed, onMounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
const route = useRoute()


const recipeStore = useRecipeStore()
const recipe = computed(()=>recipeStore.getRecipeById(route.params.id as string))
// console.log('lấy param: ',route.params.id);
// watch(()=>route.params.id,()=> console.log('fetching data'),{deep:true})


// onMounted(()=>{
//   console.log('fetch data')
// })

</script>

<style scoped>

</style>
