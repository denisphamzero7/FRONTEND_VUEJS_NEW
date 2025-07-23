<template>
  <SectionCard>

    <template #header>
      {{ title }}
    </template>
     {{ when }}
     <template #footer>
    <div class="space-y-8">
      <p>Description: {{ description }}</p>
    <div class="flex justify-end p-4">
      <round-button
        @click="$emit('register')"
      > register</round-button>
    </div>
    </div>
     </template>

  </SectionCard>
</template>

<script setup>
import RoundButton from '@/components/RoundButton.vue';
import SectionCard from '@/components/SectionCard.vue';

defineProps({
  title: String,
  when: String,
  description: String,
});
// const emit = defineEmits(['register']);
</script>

<style scoped>
/* nếu cần custom style */
</style>
