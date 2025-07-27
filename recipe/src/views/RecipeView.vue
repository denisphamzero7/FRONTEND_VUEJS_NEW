<template>
    <div>
 Recipe{{ $route.params.id }}
    </div>


    
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
console.log('lấy param: ',route.params.id);
</script>

<style scoped>

</style>