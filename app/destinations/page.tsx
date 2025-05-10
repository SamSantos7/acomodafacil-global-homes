import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Destinos - Acomoda Fácil',
  description: 'Explore nossos destinos mais populares',
}

export default function DestinationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nossos Destinos</h1>
      {/* Adicione aqui o conteúdo da sua página de destinos */}
    </div>
  )
} 