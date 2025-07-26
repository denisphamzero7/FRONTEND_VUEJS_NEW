<template>
  <div>
    <div class="text-2xl mb-4">Privacy</div>
    <form action="" class="space-y-4 mx-auto">
      <div>

<label>
Search Engine Indexing
</label>
<input type="text" v-model="privacy.seachEngineIndexing">
</div>
      <div>
        <label for="">
          Privacy
        </label>
        <select v-model="privacy.visibility">
          <option value="private">private</option>
           <option value="public">Public</option>
        </select>
      </div>
      <button type="submit" class="btn-primary">submit</button>
    </form>

  </div>
</template>

<script setup lang="ts">
import { useSettings } from '@/Composables/useSetting';

const{privacy} = useSettings()
</script>

<style scoped>

</style>
