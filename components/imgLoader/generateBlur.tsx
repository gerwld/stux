import sharp from "sharp";

export async function getBlurDataURL(imagePath:string) {
  const buffer = await sharp(imagePath)
    .resize(10, 10) // Tiny thumbnail
    .toBuffer();

  const base64 = buffer.toString("base64");
  return `data:image/jpeg;base64,${base64}`;
}