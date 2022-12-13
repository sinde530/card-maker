export interface ImageUpload {
  upload: (file: File) => Promise<CloudnaryFile>;
}

export interface CloudnaryFile {
  original_fileName?: string;
  secure_Url?: string;
}
