<script setup>
import EventCard from '@/components/EventCard.vue'
import BookingItem from '@/components/BookingItem.vue'
import LoadingEventCard from '@/components/LoadingEventCard.vue'
import LoadingBookingCard from '@/components/LoadingBookingCard.vue'
import {onMounted, ref} from 'vue'
const events=ref([])
const bookings = ref([])
const bookingLoading =ref(false)
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
const fetchBookings =async()=>{
  bookingLoading.value=true
  try {
  const response = await fetch('http://localhost:3001/bookings')
  bookings.value= await  response.json()
  console.log(bookings.value);
  } finally {
    bookingLoading.value=false
  }
}
const register = async(event)=>{
 const newBooking ={
  id:Date.now().toString(),
  userId:1,
  eventTitle:event.title
 }
console.log(newBooking);
 await fetch('http://localhost:3001/bookings',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
    ...newBooking,
    status:'confirmed'
  })
 })

}
const cancel =(i)=>{
}
onMounted(()=>{fetchEvent(),fetchBookings()})
</script>

<template>
  <main class="container mx-auto my-8 space-y-8 bg-green-100">
    <h1 class="text-4xl font-medium">event booking app</h1>
    <h1 class="text-2xl font-medium">All event</h1>
    <section class="grid grid-cols-2 gap-8">
      <template v-if="!eventsloading">
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

    <h1 class="text-2xl font-medium">your Bookings</h1>
    <section class="grid grid-cols-1 gap-8">
      <template v-if="!bookingLoading">
        <booking-item v-for="booking in bookings" :key="booking.id" :eventTitle ="eventTitle" @cancel="cancel(booking.id)" />
      </template>
      <template v-else><LoadingBookingCard  v-for="i in 4" :key="i"/></template>
    </section>
  </main>
</template>

<style scoped></style>
