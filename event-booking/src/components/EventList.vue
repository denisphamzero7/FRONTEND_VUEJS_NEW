<template>
    <section class="grid grid-cols-2 gap-8">
      <template v-if="!eventsloading">
        <event-card
        v-for="event in events"
        :key="event.id"
        :title="event.title"
        :when="event.date"
        :description="event.description"
        @register="$emit('register',event)"
      />
      </template>
      <template v-else><LoadingEventCard v-for="i in 4" :key="i"/></template>
    </section>

</template>
<script setup>
import {onMounted, ref} from 'vue'
import LoadingEventCard from '@/components/LoadingEventCard.vue'
import EventCard from '@/components/EventCard.vue'
const events=ref([])
const eventsloading=ref(false)
const fetchEvent =async()=>{
  eventsloading.value=true
  try {
  const response = await fetch('http://localhost:3001/events')
  events.value= await  response.json()
  console.log(events.value);
  } finally {
    eventsloading.value=false
  }
}

onMounted(()=>fetchEvent())
const emit = defineEmits(['register'])
</script>
