import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { InfoCardProps } from '../types/mythology';
import { deities } from '../data/deities';
import * as LucideIcons from 'lucide-react';

export const InfoCard: React.FC<InfoCardProps> = ({ deity, onClose, onDeityClick }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const Icon = LucideIcons[deity.icon as keyof typeof LucideIcons];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const getRelatedDeity = (id: string) => deities.find(d => d.id === id);

  const groupRelationships = () => {
    const groups = {
      parents: deity.relationships.filter(r => r.type === 'parent'),
      children: deity.relationships.filter(r => r.type === 'child'),
      siblings: deity.relationships.filter(r => r.type === 'sibling'),
      spouses: deity.relationships.filter(r => r.type === 'spouse')
    };
    return groups;
  };

  const relationships = groupRelationships();

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div ref={modalRef} className="mythology-modal rounded-lg max-w-3xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-amber-300/70 hover:text-amber-300 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="mythology-icon p-4 rounded-full">
            <Icon className="w-10 h-10 text-amber-300" />
          </div>
          <div>
            <h2 className="mythology-title text-4xl font-bold text-amber-100">{deity.name}</h2>
            <h3 className="mythology-text text-xl text-amber-300/80">{deity.title}</h3>
          </div>
        </div>
        
        <div className="mythology-card p-6 rounded-lg mb-6 border-t mythology-border">
          <h4 className="mythology-text font-semibold text-amber-200 mb-2">Domaine:</h4>
          <p className="mythology-text text-amber-100/90">{deity.domain}</p>
        </div>
        
        <div className="mb-8">
          <p className="mythology-text text-amber-100/80 leading-relaxed text-lg">{deity.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {Object.entries(relationships).map(([type, rels]) => 
            rels.length > 0 && (
              <div key={type} className="mythology-card p-6 rounded-lg border-t mythology-border">
                <h4 className="mythology-text font-semibold text-amber-200 mb-4 capitalize">
                  {type === 'spouses' ? 'Époux/Épouse' :
                   type === 'siblings' ? 'Frères/Sœurs' :
                   type === 'children' ? 'Parents' :
                   'Enfants'}:
                </h4>
                <ul className="space-y-3">
                  {rels.map((rel, index) => {
                    const relatedDeity = getRelatedDeity(rel.with);
                    return relatedDeity ? (
                      <li 
                        key={index}
                        onClick={() => onDeityClick(rel.with)}
                        className="flex items-center gap-3 text-amber-100/80 hover:text-amber-300 cursor-pointer transition-colors group"
                      >
                        {LucideIcons[relatedDeity.icon as keyof typeof LucideIcons] && (
                          <div className="mythology-icon p-2 rounded-full group-hover:scale-110 transition-transform">
                            {React.createElement(LucideIcons[relatedDeity.icon as keyof typeof LucideIcons], {
                              size: 16,
                              className: "text-amber-300"
                            })}
                          </div>
                        )}
                        <span className="mythology-text">
                          {relatedDeity.name} <span className="text-amber-300/50">({relatedDeity.title})</span>
                        </span>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            )
          )}
        </div>

        <a
          href={deity.wikipediaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mythology-button mythology-text inline-block px-8 py-4 rounded-lg transition-all duration-300 text-amber-100 hover:text-amber-300 text-center w-full md:w-auto"
        >
          En savoir plus sur Wikipédia
        </a>
      </div>
    </div>
  );
};