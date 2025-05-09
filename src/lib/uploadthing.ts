import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  // Define os tipos de arquivos permitidos e tamanho máximo
  documentUploader: f({ 
    pdf: { maxFileSize: "4MB" },
    image: { maxFileSize: "4MB" }
  })
    .middleware(async ({ req }) => {
      // Aqui você pode adicionar verificação de autenticação
      // Por exemplo, verificar o token JWT
      return { userId: "user_id" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("File URL:", file.url);
      
      // Aqui você pode salvar a URL do arquivo no banco de dados
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter; 