<template>
<SectionCard>
  <div class="space-4 items-center flex flex-col">
    <div class="text-red-500">
      <slot></slot>
     <RoundButton  @click="retry" v-if="retry"> Try it now</RoundButton>
    </div>

  </div>
</SectionCard>
</template>
<script>
import SectionCard from '@/components/SectionCard.vue'
import useBookings from '@/composable/useBooking.js'
import RoundButton from '@/components/RoundButton.vue';
const {register,events,fetchEvent,loading} = useBookings();
defineProps({
  retry:{
    type:Function,
    require:false
  }
})
</script>
