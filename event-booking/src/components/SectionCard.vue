<template>
  <RoundCard>
    <h3 v-if="$slots.header" class="p-4 font-medium text-xl border-b border-gray-200" >
      <slot name="header">

      </slot>
    </h3>
    <div v-if="$slots.default" class="p-4 border-b-8 border-gray-300 ">
      <slot></slot>
    </div>

    <div v-if="$slots.footer" class="p-4">
      <slot name="footer"></slot>
    </div>
  </RoundCard>
</template>
<script setup>
import RoundCard from './RoundCard.vue';
</script>
