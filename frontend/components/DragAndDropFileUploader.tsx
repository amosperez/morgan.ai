"use client";

import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["pdf"];

export default function DragAndDropFileUploader() {
   const [file, setFile] = useState(null);
   const handleChange = (file: any) => {
      setFile(file);
   };
   return (
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
   );
}
