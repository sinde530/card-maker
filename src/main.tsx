import React, { FC } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";
import ImageFileInput from "./components/ImageFileInput";

import { CloudnaryFile } from "./types/Image";

import FireBaseRealTimeDBImpl from "./service/firebase_realtime_db";
import ImageUploaderImpl from "./service/image_uploader";

interface FileInputProps {
  handleCardWhenFileChange: (file: CloudnaryFile) => void;
}

const fireBaseRealTimeDB = new FireBaseRealTimeDBImpl();
const imageUploader = new ImageUploaderImpl();

const FileInput: FC<FileInputProps> = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App FileInput={FileInput} fireBaseRealTiemDB={fireBaseRealTimeDB} />
    </BrowserRouter>
  </React.StrictMode>
);
