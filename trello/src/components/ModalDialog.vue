<template>
  <div v-if="isOpen" @keydown.esc="emit('close')" ref="modalElement"
  class="fixed inset-0 bg-black bg-opacity-50 flex  items-center justify-center" role="dialog" aria-modal="true" >
        <div class="bg-white p-5 rounded max-w-md w-full">

          <h2 class="text-2xl font-bold mb-4">Add Card </h2>
          <input ref="inputTitle" type="text" placeholder="Card title" aria-label="Card Title" class="w-full p-2 mb-4 border rounded" >
          <textarea class="w-full p-2 mb-4 border rounded" placeholder="Description"></textarea>
          <div class="flex justify-end gap-2">
            <button class="bg-gray-300 hover:bg-gray-200 text-black rounded-sm px-2" @click="emit('close')"> Cancel</button>
            <button class="bg-blue-500 hover:bg-blue-600 text-white rounded-sm px-2" @click="emit('close')" > Save</button>

          </div>
        </div>
  </div>
</template>
<script setup lang="ts">
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import { nextTick, ref, watch } from 'vue'

const props = defineProps<{
  isOpen: boolean
}>()

const inputTitle = ref<HTMLInputElement | null>(null)
const modalElement = ref<HTMLElement | null>(null) // ✅ sửa từ HTMLInputElement

const { activate, deactivate } = useFocusTrap(modalElement)

const emit = defineEmits<{
  (e: 'close'): void
}>()

watch(() => props.isOpen, async (isOpen) => {
  if (isOpen) {
    await nextTick()
    activate() // Trap focus toàn modal
    inputTitle.value?.focus()
  } else {
    deactivate()
  }
})
</script>
<style scoped>

</style>
