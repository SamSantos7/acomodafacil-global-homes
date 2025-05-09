'use client';

import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useUploadThing } from '@/lib/uploadthing';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function DocumentUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { data: session } = useSession();

  const { startUpload, isUploading } = useUploadThing("documentUploader", {
    onClientUploadComplete: (res) => {
      setUploading(false);
      setFiles([]);
      router.refresh();
    },
    onUploadError: (error: Error) => {
      setUploading(false);
      setError(error.message);
    },
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    maxSize: 4 * 1024 * 1024, // 4MB
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
      setError(null);
    },
    onDropRejected: (rejectedFiles) => {
      setError('Arquivo muito grande ou formato não suportado');
    }
  });

  const handleUpload = async () => {
    if (files.length === 0) return;

    setUploading(true);
    setError(null);

    try {
      await startUpload(files);
    } catch (err) {
      setError('Erro ao fazer upload do arquivo');
      setUploading(false);
    }
  };

  if (!session) {
    return (
      <div className="text-center p-6 bg-gray-50 rounded-lg">
        <p className="text-gray-600">Faça login para fazer upload de documentos</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto p-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-500'}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-500">Solte os arquivos aqui...</p>
        ) : (
          <div>
            <p className="text-gray-600 mb-2">
              Arraste e solte arquivos aqui, ou clique para selecionar
            </p>
            <p className="text-sm text-gray-500">
              Formatos aceitos: PDF, PNG, JPG (máx. 4MB)
            </p>
          </div>
        )}
      </div>

      {files.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Arquivos selecionados:</h3>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <span className="text-sm truncate">{file.name}</span>
                <span className="text-xs text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)}MB
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {files.length > 0 && (
        <button
          onClick={handleUpload}
          disabled={uploading || isUploading}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {uploading || isUploading ? 'Enviando...' : 'Enviar Arquivos'}
        </button>
      )}
    </div>
  );
}
