import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Acomodações - Acomoda Fácil',
  description: 'Encontre as melhores acomodações para sua viagem',
}

export default function AccommodationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nossas Acomodações</h1>
      {/* Adicione aqui o conteúdo da sua página de acomodações */}
    </div>
  )
} 