
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Star, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock data for demo
const citiesData = {
  'canada-toronto': {
    id: 'toronto',
    name: 'Toronto',
    countryId: 'canada',
    countryName: 'Canadá',
    description: 'Toronto é a maior cidade do Canadá e um centro multicultural vibrante, oferecendo uma excelente qualidade de vida para estudantes internacionais. Com universidades de renome mundial, uma cena cultural diversificada e ótimas oportunidades de trabalho, Toronto é um destino ideal para seu intercâmbio.',
    imageSrc: 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    accommodations: [
      {
        id: 'acc1',
        name: 'Student Residence Toronto',
        location: 'Downtown Toronto',
        imageSrc: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        price: 950,
        rating: 4.8,
        type: 'residence',
        distanceToCenter: 1.2
      },
      {
        id: 'acc5',
        name: 'Maple Leaf Student Housing',
        location: 'North York',
        imageSrc: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        price: 850,
        rating: 4.5,
        type: 'residence',
        distanceToCenter: 7.4
      },
      {
        id: 'acc6',
        name: 'CN Tower View Apartments',
        location: 'Entertainment District',
        imageSrc: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        price: 1150,
        rating: 4.9,
        type: 'apartment',
        distanceToCenter: 0.6
      },
      {
        id: 'acc7',
        name: 'Yorkville Student Suites',
        location: 'Yorkville',
        imageSrc: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        price: 1250,
        rating: 4.7,
        type: 'apartment',
        distanceToCenter: 2.3
      },
      {
        id: 'acc8',
        name: 'Canadian Family Homestay',
        location: 'Etobicoke',
        imageSrc: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        price: 800,
        rating: 4.6,
        type: 'homestay',
        distanceToCenter: 15.2
      }
    ]
  },
  'canada-vancouver': {
    id: 'vancouver',
    name: 'Vancouver',
    countryId: 'canada',
    countryName: 'Canadá',
    description: 'Vancouver é uma cidade costeira vibrante na Columbia Britânica, conhecida por sua qualidade de vida excepcional e beleza natural deslumbrante. Com um ambiente acolhedor para estudantes internacionais, a cidade oferece excelentes instituições de ensino e uma atmosfera multicultural única.',
    imageSrc: 'https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    accommodations: []
  }
};

const City = () => {
  const { countryId, cityId } = useParams<{ countryId: string; cityId: string }>();
  
  // In a real application, you'd fetch data based on the parameters
  const cityKey = `${countryId}-${cityId}`;
  const city = citiesData[cityKey as keyof typeof citiesData];

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
      
      {/* City Header */}
      <div 
        className="relative h-80 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('${city.imageSrc}')`,
        }}
      >
        <div className="absolute inset-0 bg-secondary bg-opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex flex-col justify-end pb-8">
          <div className="flex items-center text-white mb-2">
            <Link to="/destinations" className="flex items-center hover:underline">
              <ArrowLeft size={16} className="mr-1" />
              <span>{city.countryName}</span>
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{city.name}</h1>
        </div>
      </div>
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* City Description */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h2 className="text-2xl font-bold text-secondary mb-3">Sobre {city.name}</h2>
            <p className="text-gray-600">{city.description}</p>
          </div>
          
          {/* Filter and Accommodations */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-lg font-bold text-secondary mb-4">Filtros</h3>
                
                {/* Price Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Preço por semana</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">$500</span>
                    <span className="text-sm text-gray-500">$2000+</span>
                  </div>
                  {/* A real slider would go here */}
                  <div className="h-2 bg-gray-200 rounded-full mt-2">
                    <div className="h-2 bg-primary rounded-full w-3/4"></div>
                  </div>
                </div>
                
                {/* Accommodation Type */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Tipo de Acomodação</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="residence" className="mr-2" />
                      <label htmlFor="residence" className="text-gray-700">Residência Estudantil</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="apartment" className="mr-2" />
                      <label htmlFor="apartment" className="text-gray-700">Apartamento</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="homestay" className="mr-2" />
                      <label htmlFor="homestay" className="text-gray-700">Homestay</label>
                    </div>
                  </div>
                </div>
                
                {/* Distance */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Distância do Centro</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">0 km</span>
                    <span className="text-sm text-gray-500">20+ km</span>
                  </div>
                  {/* A real slider would go here */}
                  <div className="h-2 bg-gray-200 rounded-full mt-2">
                    <div className="h-2 bg-primary rounded-full w-1/2"></div>
                  </div>
                </div>
                
                <Button className="w-full">Aplicar Filtros</Button>
              </div>
            </div>
            
            {/* Accommodations */}
            <div className="lg:w-3/4">
              <h2 className="text-2xl font-bold text-secondary mb-6">Acomodações em {city.name}</h2>
              
              {/* Accommodations List */}
              <div className="space-y-6">
                {city.accommodations.map((accommodation) => (
                  <Link 
                    key={accommodation.id} 
                    to={`/accommodation/${accommodation.id}`}
                    className="block"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-48 md:h-auto">
                        <img 
                          src={accommodation.imageSrc} 
                          alt={accommodation.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6 md:w-2/3 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg text-gray-800">{accommodation.name}</h3>
                            <Badge className="bg-primary hover:bg-primary">
                              {getAccommodationTypeLabel(accommodation.type)}
                            </Badge>
                          </div>
                          <div className="flex items-center mb-4">
                            <MapPin size={16} className="text-primary mr-1" />
                            <span className="text-sm text-gray-500">{accommodation.location} ({accommodation.distanceToCenter} km do centro)</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Star size={16} className="text-yellow-400 mr-1" fill="currentColor" />
                            <span className="text-sm font-medium">{accommodation.rating}</span>
                          </div>
                          <div>
                            <span className="text-primary font-semibold text-lg">${Math.floor(accommodation.price / 4)}</span>
                            <span className="text-sm text-gray-500">/semana</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* Mock map placeholder - would be real map in actual application */}
              <div className="mt-10 bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-primary mx-auto mb-2" />
                  <p className="text-gray-500">Mapa interativo com localização das acomodações</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default City;
