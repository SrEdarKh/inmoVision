import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Agent } from '../../types';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const { name, email, phone, photo, bio } = agent;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg">

      {/* Imagen */}
      <div className="w-full h-80 overflow-hidden">
        <img 
          src={photo} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>


      {/* Contenido */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-semibold mb-2">{name}</h3>
        <p className="text-neutral-600 mb-4 flex-grow line-clamp-4">{bio}</p>

        {/* Contacto */}
        <div className="space-y-2 mt-auto">
          <div className="flex items-center text-neutral-700">
            <Phone className="w-5 h-5 mr-2 text-primary-600" />
            <a href={`tel:${phone}`} className="hover:text-primary-600 transition-colors">
              {phone}
            </a>
          </div>
          <div className="flex items-center text-neutral-700">
            <Mail className="w-5 h-5 mr-2 text-primary-600" />
            <a href={`mailto:${email}`} className="hover:text-primary-600 transition-colors">
              {email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
