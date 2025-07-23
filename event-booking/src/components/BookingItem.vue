<template>
 <SectionCard>
 <div>
 {{ eventTitle}}
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
  eventTitle:String,
})
</script>

<style lang="scss" scoped>

</style>
