<script setup>
import EventCard from '@/components/EventCard.vue'
import BookingItem from '@/components/BookingItem.vue'
import {ref} from 'vue'
const data=ref('100')
</script>

<template>


  <main class="container mx-auto my-8 space-y-8">
   <h1 class="text-4xl font-medium">event booking app</h1>
   <h1 class="text-2xl font-medium">All event</h1>
   <section class="grid grid-cols-2 gap-8">
    <event-card v-for="i in 8" :key="i" title="Vue 2024" when="2001" description="mô tả" @register="console.log('register');"/>
   </section>
   <h1 class="text-2xl font-medium">your Bookings</h1>
   <section class="grid grid-cols-1 gap-8" >
    <booking-item v-for="i in 8 " :key="i"/>
   </section>

  </main>
</template>

<style scoped>

</style>
