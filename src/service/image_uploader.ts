import { ImageUpload } from "src/types/Image";

export default class ImageUploaderImpl implements ImageUpload {
  private fileUrl = import.meta.env.VITE_CLOUDINARY_URL;

  async upload(file: File) {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "business-card-profile");

    return fetch(this.fileUrl!, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .catch(console.error);
  }
}
