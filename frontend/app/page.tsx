import DragAndDropFileUploader from "@/components/DragAndDropFileUploader";
import Image from "next/image";

export default function Home() {
   return (
      <main className="flex h-screen flex-col justify-center">
         <div className="w-full">
            <div className="mx-auto pb-12 text-center">
               <h1 className="text-6xl font-bold">Morgan.ai</h1>
               <p className="mt-6 text-xl">Your AI Legal Assistant</p>
            </div>
         </div>
         <div className="w-full">
            <div className="mx-auto max-w-2xl">
               <DragAndDropFileUploader />
            </div>
         </div>
      </main>
   );
}
