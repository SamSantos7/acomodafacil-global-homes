
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const accommodations = [
  {
    id: 'acc1',
    name: 'Student Residence Toronto',
    location: 'Downtown Toronto',
    city: 'Toronto',
    country: 'Canada',
    imageSrc: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    price: 950,
    rating: 4.8,
    type: 'residence',
    distanceToCenter: 1.2
  },
  {
    id: 'acc2',
    name: 'Dublin Student Apartments',
    location: 'Temple Bar',
    city: 'Dublin',
    country: 'Ireland',
    imageSrc: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    price: 1100,
    rating: 4.5,
    type: 'apartment',
    distanceToCenter: 0.8
  },
  {
    id: 'acc3',
    name: 'Sydney Harbor View',
    location: 'Sydney CBD',
    city: 'Sydney',
    country: 'Australia',
    imageSrc: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    price: 1250,
    rating: 4.9,
    type: 'apartment',
    distanceToCenter: 0.5
  },
  {
    id: 'acc4',
    name: 'London Student Home',
    location: 'Westminster',
    city: 'London',
    country: 'England',
    imageSrc: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    price: 1400,
    rating: 4.7,
    type: 'homestay',
    distanceToCenter: 1.5
  }
];

const Accommodations = () => {
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-secondary mb-4">Todas as Acomodações</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore nossa seleção completa de acomodações estudantis premium em destinos internacionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accommodations.map((accommodation) => (
              <Link 
                key={accommodation.id}
                to={`/accommodation/${accommodation.id}`}
                className="block"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full card-hover">
                  <div className="relative h-48">
                    <img 
                      src={accommodation.imageSrc}
                      alt={accommodation.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-primary hover:bg-primary">
                        {getAccommodationTypeLabel(accommodation.type)}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <MapPin size={16} className="text-primary mr-1" />
                      <span className="text-sm text-gray-500">
                        {accommodation.location} ({accommodation.distanceToCenter} km do centro)
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-1">{accommodation.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{accommodation.city}, {accommodation.country}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star size={16} className="text-yellow-400 mr-1" fill="currentColor" />
                        <span className="text-sm font-medium">{accommodation.rating}</span>
                      </div>
                      <div>
                        <span className="text-primary font-semibold">${accommodation.price}</span>
                        <span className="text-sm text-gray-500">/mês</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Accommodations;
