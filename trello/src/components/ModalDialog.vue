<template>
  <div
    v-if="isOpen"
    @keydown.esc="emit('close')"
    ref="modalElement"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    role="dialog"
    aria-modal="true"
  >
    <div class="bg-white p-5 rounded max-w-md w-full">
      <h2 class="text-2xl font-bold mb-4">
        {{ mode === 'add' ? 'Add Card' : 'Edit Card' }}
      </h2>

      <input
        ref="inputTitle"
        v-model="localCard.title"
        type="text"
        placeholder="Card title"
        aria-label="Card Title"
        class="w-full p-2 mb-4 border rounded"
      />
      <textarea
        v-model="localCard.description"
        class="w-full p-2 mb-4 border rounded"
        placeholder="Description"
      ></textarea>

      <div class="flex justify-end gap-2">
        <button
          class="bg-gray-300 hover:bg-gray-200 text-black rounded-sm px-2"
          @click="emit('close')"
        >
          Cancel
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white rounded-sm px-2"
          @click="handleSave"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import type { Card } from '@/types';

const props = defineProps<{
  isOpen: boolean
  mode: 'add' | 'edit'
  initial: Card | null
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'save',card: Card): void
}>()

const modalElement = ref<HTMLElement | null>(null)
const inputTitle = ref<HTMLInputElement | null>(null)
const { activate, deactivate } = useFocusTrap(modalElement)


const localCard = ref<Partial<Card>>({
   title: '',
  description: '',
  id: undefined,
})

watch(
  () => props.isOpen,
  async (isOpen) => {
    if (isOpen) {
      // Reset input values
      localCard.value = {
        title: props.initial?.title ?? '',
        description: props.initial?.description ?? '',
        id: props.initial?.id,
      }

      await nextTick()
      activate()
      inputTitle.value?.focus()
    } else {
      deactivate()
    }
  }
)

const handleSave = () => {
  emit('save', { ...localCard.value })
  emit('close')
}
</script>
<!-- <script setup lang="ts">
import type { Card } from '@/types';
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import { nextTick, ref, watch } from 'vue'

const props = defineProps<{
  isOpen: boolean

  mode: 'add' | 'edit'

  card:Card|null
  mode:'add'|'edit'

}>()

const inputTitle = ref<HTMLInputElement | null>(null)
const modalElement = ref<HTMLElement | null>(null)

const { activate, deactivate } = useFocusTrap(modalElement)

const emit = defineEmits<{
  (e: 'close'): void,
  (e:'save',card:Card):void


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

</style> -->
