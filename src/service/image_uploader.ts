import axios from "axios";

import { ImageUpload } from "src/types/Image";

export default class ImageUploaderImpl implements ImageUpload {
  private url = import.meta.env.VITE_CLOUDINARY_URL;

  async upload(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "business-card-profile");

    try {
      const response = await axios.post(this.url!, formData);
      return response.data;
    } catch (error) {
      console.error(error);
    }
    return null;
  }
}
