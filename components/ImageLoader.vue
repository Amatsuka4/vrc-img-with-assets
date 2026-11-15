<template>
  <div>
    <label>
      {{ label }}
      <input type="file" accept="image/*" @change="loadImage">
    </label>
  </div>
</template>

<script setup lang="ts">
import { readImage, type LoadedImage } from '~/utils/readImage'

withDefaults(defineProps<{ label?: string }>(), { label: '画像を選択' })
const emit = defineEmits<{
  loadstart: []
  load: [image: LoadedImage]
  error: [error: Error]
}>()
let loadId = 0

async function loadImage(event: Event) {
  const input = event.target
  if (!(input instanceof HTMLInputElement)) return
  const file = input.files?.[0]
  if (!file) return
  input.value = ''

  const id = ++loadId
  emit('loadstart')
  try {
    const image = await readImage(file)
    if (id === loadId) emit('load', image)
  } catch (error) {
    if (id === loadId) {
      emit('error', error instanceof Error ? error : new Error(String(error)))
    }
  }
}

onBeforeUnmount(() => { loadId++ })
</script>
