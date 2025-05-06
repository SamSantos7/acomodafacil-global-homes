
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Wifi, Coffee, Home, Check, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock data for demo
const accommodationData = {
  id: 'acc1',
  name: 'Student Residence Toronto',
  location: 'Downtown Toronto',
  city: 'Toronto',
  country: 'Canada',
  countryId: 'canada',
  cityId: 'toronto',
  description: 'Uma residência estudantil moderna localizada no coração de Toronto, oferecendo quartos confortáveis e espaços comuns bem equipados. A apenas 15 minutos a pé das principais universidades e com fácil acesso a transporte público, restaurantes e atrações culturais.',
  longDescription: 'Esta residência estudantil premium foi projetada pensando no conforto e nas necessidades dos estudantes internacionais. Oferecemos quartos individuais e compartilhados, todos mobiliados e decorados com estilo moderno. Nossos espaços comuns incluem uma cozinha totalmente equipada, sala de estudos, academia, lavanderia e sala de TV.\n\nLocalizada em uma das áreas mais vibrantes de Toronto, você estará a poucos passos de restaurantes, cafés, supermercados e transporte público. As principais universidades de Toronto estão a uma curta distância a pé ou de transporte público.',
  images: [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  ],
  price: 950,
  weeklyPrice: 250,
  rating: 4.8,
  reviewCount: 124,
  type: 'residence',
  distanceToCenter: 1.2,
  amenities: [
    'Wi-Fi de Alta Velocidade',
    'Cozinha Compartilhada',
    'Lavanderia',
    'Academia',
    'Sala de Estudos',
    'Segurança 24h',
    'Mobília Completa',
    'Utensílios de Cozinha',
    'Limpeza Semanal',
    'Áreas Comuns',
    'TV por Assinatura',
    'Estacionamento'
  ],
  rules: [
    'Não é permitido fumar',
    'Não é permitido festas ou eventos',
    'Entrada após 22h com silêncio',
    'Respeitar horários de silêncio',
    'Visitantes devem ser registrados na recepção',
    'Proibido animais de estimação',
    'Reserva mínima de 4 semanas'
  ]
};

const Accommodation = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real application, you'd fetch data based on the ID
  const accommodation = accommodationData; // This would be fetched in a real app
  const [mainImage, setMainImage] = React.useState(accommodation.images[0]);

  const getAccommodationTypeLabel = (type: string) => {
    switch (type) {
      case 'residence':
        return 'Residência';
      case 'apartment':
        return 'Apartamento';
      case 'homestay':
        return 'Homestay';
      default:
        return 'Acomodação';
    }
  };

  return (
    <div>
      <Navbar />
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <div className="flex items-center text-gray-600 text-sm">
              <Link to={`/destinations/${accommodation.countryId}`} className="hover:text-primary">{accommodation.country}</Link>
              <span className="mx-2">›</span>
              <Link to={`/city/${accommodation.countryId}/${accommodation.cityId}`} className="hover:text-primary">{accommodation.city}</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-800">{accommodation.name}</span>
            </div>
          </div>

          {/* Back Button */}
          <div className="mb-6">
            <Link 
              to={`/city/${accommodation.countryId}/${accommodation.cityId}`}
              className="inline-flex items-center text-secondary hover:text-primary"
            >
              <ArrowLeft size={16} className="mr-1" />
              <span>Voltar para {accommodation.city}</span>
            </Link>
          </div>
          
          {/* Title & Type */}
          <div className="flex flex-wrap justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-secondary mb-2">{accommodation.name}</h1>
              <div className="flex items-center mb-1">
                <MapPin size={16} className="text-primary mr-1" />
                <span className="text-gray-600">{accommodation.location}, {accommodation.city}</span>
              </div>
            </div>
            <Badge className="bg-primary hover:bg-primary mt-2 md:mt-0">
              {getAccommodationTypeLabel(accommodation.type)}
            </Badge>
          </div>
          
          {/* Image Gallery */}
          <div className="mb-10">
            <div className="grid grid-cols-1 gap-4">
              <div className="h-96 rounded-lg overflow-hidden">
                <img 
                  src={mainImage} 
                  alt={accommodation.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {accommodation.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`h-24 rounded-lg overflow-hidden cursor-pointer ${
                      image === mainImage ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setMainImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${accommodation.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content & Booking */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Content */}
            <div className="lg:w-2/3 space-y-8">
              {/* Description */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-secondary mb-4">Descrição</h2>
                <p className="text-gray-600 mb-4">{accommodation.description}</p>
                <p className="text-gray-600 whitespace-pre-line">{accommodation.longDescription}</p>
              </div>
              
              {/* Amenities */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-secondary mb-4">Facilidades</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {accommodation.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <Check size={18} className="text-primary mr-2" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* House Rules */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-secondary mb-4">Regras da Casa</h2>
                <ul className="space-y-2">
                  {accommodation.rules.map((rule, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-2 mt-2"></span>
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Map Placeholder */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-secondary mb-4">Localização</h2>
                <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-primary mx-auto mb-2" />
                    <p className="text-gray-500">Mapa interativo com a localização da acomodação</p>
                    <p className="text-gray-500 text-sm">
                      {accommodation.location}, {accommodation.city}, {accommodation.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Booking Card */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-primary font-bold text-2xl">${accommodation.price}</span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                  <div className="flex items-center">
                    <Star size={18} className="text-yellow-400 mr-1" fill="currentColor" />
                    <span className="font-semibold">{accommodation.rating}</span>
                    <span className="text-gray-600 text-sm ml-1">({accommodation.reviewCount} avaliações)</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="font-medium text-gray-800 mb-2">Preços:</p>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Semanal:</span>
                    <span className="text-gray-800">${accommodation.weeklyPrice}/semana</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mensal:</span>
                    <span className="text-gray-800">${accommodation.price}/mês</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="font-medium text-gray-800 mb-3">Selecione suas datas:</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Check-in</label>
                      <input 
                        type="date" 
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Check-out</label>
                      <input 
                        type="date" 
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm text-gray-600 mb-1">Quantidade de hóspedes</label>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                      <option value="1">1 hóspede</option>
                      <option value="2">2 hóspedes</option>
                    </select>
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">Reservar Agora</Button>
                
                <p className="text-center text-gray-500 text-sm mt-3">
                  Você não será cobrado ainda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Accommodation;
