<template>
  <div>
    <div class="text-2xl mb-4">Notification</div>
    <form action="" class="space-y-4 mx-auto">
   <div class="flex items-center gap-1">

      <input type="checkbox" v-model="notification.email">
      <label>
        Email notification
      </label>
    </div>
    <div class="flex items-center gap-1">

      <input type="checkbox" v-model="notification.sms">
      <label>
        Sms notification
      </label>
    </div>




    <button type="submit" class="btn-primary">submit</button>
    </form>

  </div>
</template>

<script setup lang="ts">
import { useSettings } from '@/Composables/useSetting';

const { notification } = useSettings()
</script>

<style scoped></style>
