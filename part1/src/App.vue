<template>
  <div>
<h1>the first app</h1>

<button @click="add" type="button">add</button>
<span>{{ count }}</span>
<button @click="remove" type="button">remove</button>
<p v-if="count>= 10">ohh cool off due</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0)
const add = ()=>{
  count.value++
}
const remove =()=>{
  if(count.value >0){
    count.value--
  }
}
</script>

<style lang="scss" scoped>

</style>