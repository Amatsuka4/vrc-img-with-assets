export type LoadedImage = { image: HTMLImageElement; filename: string }

export async function readImage(file: File): Promise<LoadedImage> {
  let url: string | undefined
  try {
    url = URL.createObjectURL(file)
    const image = new Image()
    image.src = url
    await image.decode()
    return { image, filename: file.name }
  } finally {
    if (url) URL.revokeObjectURL(url)
  }
}
