<template>

   <template v-if="error">
    <ErrorCard>could not load events at the moments , try a gain</ErrorCard>
   </template>
    <template v-else>
      <section class="grid grid-cols-2 gap-8">
      <template v-if="!loading">
        <event-card
        v-for="event in events"
        :key="event.id"
        :title="event.title"
        :when="event.date"
        :description="event.description"
        @register="register(event)"
      />
      </template>
      <template v-else><LoadingEventCard v-for="i in 4" :key="i"/></template>
    </section>
    </template>

</template>
<script setup>
import {onMounted, ref} from 'vue'
import LoadingEventCard from '@/components/LoadingEventCard.vue'
import EventCard from '@/components/EventCard.vue'
import useBookings from '@/composable/useBooking.js'
import ErrorCard from '@/components/ErrorCard.vue'
const {register,events,fetchEvent,loading,error} = useBookings();


onMounted(()=>fetchEvent())
// @register="$emit('register',event) :lắng nghe sự kiện ở hàm cha"
// const emit = defineEmits(['register'])
</script>
