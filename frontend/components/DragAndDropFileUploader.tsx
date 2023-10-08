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
      <FileUploader handleChange={handleChange} name="file" types={fileTypes}>
         <div className="max-w-md">
            <div>Upload</div>
            <div className="mt-2 rounded-lg border border-dashed px-6 py-10 text-center hover:cursor-pointer">
               <div className="font-bold">Drag and drop files here</div>

               <div className="mt-2 text-xs text-gray-400">
                  -------- or --------
               </div>

               <div className="mt-2">Browse Files</div>
            </div>
         </div>
      </FileUploader>
   );
}
