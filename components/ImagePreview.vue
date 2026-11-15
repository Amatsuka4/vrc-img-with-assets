<template>
  <div class="canvas-container" role="img" :aria-label="filename">
    <v-stage :config="size">
      <v-layer>
        <v-image :config="{ image, ...size }" />
      </v-layer>
    </v-stage>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ image: HTMLImageElement; filename: string }>()

const size = computed(() => {
  const scale = Math.min(1, 640 / props.image.naturalWidth, 480 / props.image.naturalHeight)
  return {
    width: props.image.naturalWidth * scale,
    height: props.image.naturalHeight * scale,
  }
})
</script>

<style scoped>
.canvas-container {
  margin-top: 16px;
  overflow: auto;
}
</style>
