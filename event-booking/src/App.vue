<script setup>

import EventList from '@/components/EventList.vue'
import BookingList from '@/components/BookingList.vue'
import BookingItem from '@/components/BookingItem.vue'
</script>

<template>
  <main class="container mx-auto my-8 space-y-8 bg-green-100">
    <h1 class="text-4xl font-medium">event booking app</h1>
    <h1 class="text-2xl font-medium">All event</h1>
        <event-list/>

    <h1 class="text-2xl font-medium">your Bookings</h1>
        <booking-list/>
  </main>
</template>

<style scoped></style>
