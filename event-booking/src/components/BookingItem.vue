<template>
 <SectionCard class="">
 <div class="flex justify-between">
 {{ title}}
 </div>
<RoundButton variant="danger" @click="$emit('cancel')">
  Cancel
</RoundButton>
 </SectionCard>
</template>

<script setup>
import SectionCard from '@/components/SectionCard.vue'
import RoundButton from '@/components/RoundButton.vue'
defineProps({
  title:String,
})
</script>

<style lang="scss" scoped>

</style>
