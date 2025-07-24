<template>
  <section class="grid grid-cols-1 gap-8">
      <template v-if="!loading">
        <booking-item v-for="booking in bookings" :key="booking.id" :title ="booking.eventTitle" :status="booking.status"  @cancel="cancel(booking.id)" />
      </template>
      <template v-else><LoadingBookingCard  v-for="i in 4" :key="i"/></template>
    </section>
</template>
<script setup>
import LoadingBookingCard from '@/components/LoadingBookingCard.vue'
import BookingItem from '@/components/BookingItem.vue'
import {onMounted} from 'vue'
import useBookings from '@/composable/useBooking.js'
const {bookings,fetchBookings,cancel,loading} = useBookings();

onMounted(()=>fetchBookings())
</script>
