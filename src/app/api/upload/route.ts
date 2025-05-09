
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload completo:", file.url);
      return { url: file.url };
    }),
} satisfies FileRouter;
 
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return new Response("Nenhum arquivo enviado", { status: 400 });
    }

    const uploaded = await ourFileRouter.imageUploader.upload(file);
    return Response.json({ fileUrl: uploaded.url });
  } catch (error) {
    console.error("Erro no upload:", error);
    return new Response("Erro ao fazer upload", { status: 500 });
  }
}
