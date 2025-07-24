<script setup>

import EventList from '@/components/EventList.vue'
import BookingItem from '@/components/BookingItem.vue'
import LoadingBookingCard from '@/components/LoadingBookingCard.vue'
import {onMounted} from 'vue'
import useBookings from '@/composable/useBooking.js'
const {loading,bookings,fetchBookings} = useBookings();


const findBookingId =(id)=> bookings.value.findIndex(
    (b)=>b.id === id);

const cancel = async(bookingId)=>{
  const index = findBookingId(bookingId);
const orinalBooking = bookings.value[index];
bookings.value.splice(index,1);
  try {
  const response =await fetch(`http://localhost:3001/bookings/${bookingId}`,{
      method:'DELETE'
  });
  if(!response.ok){
    throw new Error('Booking could not be cancelled');
  }
  } catch (error) {
    console.error(`Fail cancel booking:`,error)
    bookings.value.splice(index,0, orinalBooking)
  }
}
const register = async(event)=>{
  if(bookings.value.some((booking)=>booking.eventId === event.id && booking.userId===1)){
    alert('you are already registered for this event')
    return
  }
 const newBooking ={
  id:Date.now().toString(),
  userId:1,
  eventId:event.id,
  eventTitle:event.title,
  status:'pending'
 }
 bookings.value.push(newBooking)
console.log('log :',newBooking);
 try {
  const response =await fetch('http://localhost:3001/bookings',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
    ...newBooking,
    status:'confirmed'
  })
 })
 if(response.ok){
  const index = bookings.value.findIndex(
    (b)=>b.id === newBooking.id);
    bookings.value[index] = await response.json()

 }else{
  throw new Error('fail to confirm booking')
 }
 } catch (e) {
console.error(`Failed to register for event:`,e)
bookings.value.filter((b)=>b.id != newBooking.id)
 }

}
onMounted(()=>fetchBookings())
</script>

<template>
  <main class="container mx-auto my-8 space-y-8 bg-green-100">
    <h1 class="text-4xl font-medium">event booking app</h1>
    <h1 class="text-2xl font-medium">All event</h1>
  <event-list @register="register($event)"/>

    <h1 class="text-2xl font-medium">your Bookings</h1>
    <section class="grid grid-cols-1 gap-8">
      <template v-if="!loading">
        <booking-item v-for="booking in bookings" :key="booking.id" :title ="booking.eventTitle" :status="booking.status"  @cancel="cancel(booking.id)" />
      </template>
      <template v-else><LoadingBookingCard  v-for="i in 4" :key="i"/></template>
    </section>
  </main>
</template>

<style scoped></style>
