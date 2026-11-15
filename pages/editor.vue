<template>
  <main>
    <h1>アバター写真と使用アセットを紐づけた画像を作るWebアプリ（名称未定）</h1>
    <section class="image-editor">
      <ImageLoader @loadstart="error = ''" @load="handleImageLoad" @error="handleImageError" />
      <p v-if="error" role="alert">{{ error }}</p>
      <ImagePreview v-if="image" :image="image" :filename="filename" />
    </section>
  </main>
</template>

<script setup lang="ts">
import type { LoadedImage } from '~/utils/readImage'

const image = shallowRef<HTMLImageElement | null>(null)
const filename = ref('')
const error = ref('')

function handleImageLoad(result: LoadedImage) {
  image.value = result.image
  filename.value = result.filename
}

function handleImageError() {
  error.value = '画像を読み込めませんでした。別の画像を選択してください。'
}
</script>

<style scoped>
.image-editor {
  margin-top: 24px;
}
</style>
