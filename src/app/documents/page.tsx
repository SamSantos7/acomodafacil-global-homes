import DocumentUpload from '@/components/DocumentUpload';
import DocumentList from '@/components/DocumentList';

export default function DocumentsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Upload de Documentos</h1>
        <p className="text-gray-600 mb-8">
          Faça upload dos seus documentos para verificação. Formatos aceitos: PDF, PNG, JPG (máximo 4MB por arquivo).
        </p>
        
        <DocumentUpload />
        <DocumentList />
      </div>
    </div>
  );
} 