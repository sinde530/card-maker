/* eslint-disable class-methods-use-this */
/* eslint-disable no-return-await */
export default class ImageUpload {
  async upload(file: string | Blob) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "pdzaoz52");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/drqni4rhj/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return result.json();
  }
}
