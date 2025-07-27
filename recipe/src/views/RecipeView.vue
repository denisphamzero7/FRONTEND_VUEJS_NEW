<template>
    <nav>
      <h1>recipe:{{ $route.params.id }}</h1>
      <ul>
        <li>
          <RouterLink :to="{name:'recipe',params:{id:1}}">Recipe 1</RouterLink>
          <RouterLink :to="{name:'recipe',params:{id:2}}">Recipe 2</RouterLink>
        </li>
      </ul>
    </nav>



</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
const route = useRoute()
console.log('lấy param: ',route.params.id);
watch(()=>route.params.id,()=> console.log('fetching data'),{deep:true})
// onMounted(()=>{
//   console.log('fetch data')
// })

</script>

<style scoped>

</style>
