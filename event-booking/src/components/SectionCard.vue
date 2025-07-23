<template>
  <RoundCard>
    <h3 class="p-4 font-medium text-xl border-b border-gray-200"><slot name="header">
      what: {{ title }}
    </slot></h3>
    <h3 class="p-4 text-xl border-b border-gray-200"><slot></slot></h3>

   <div class="p-4">
    <slot name="footer"></slot>
   </div>
  </RoundCard>
</template>
<script setup>
import RoundCard from './RoundCard.vue';
</script>
