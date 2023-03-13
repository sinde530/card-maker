export interface ImageUpload {
  upload: (file: File) => Promise<CloudnaryFile>;
}

export interface CloudnaryFile {
  original_filename?: string;
  secure_url?: string;
}
