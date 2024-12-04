import React from 'react';
import { Deity } from '../types/mythology';
import * as LucideIcons from 'lucide-react';

interface DeityNodeProps {
  deity: Deity;
  onClick: (deity: Deity) => void;
}

export const DeityNode: React.FC<DeityNodeProps> = ({ deity, onClick }) => {
  const Icon = LucideIcons[deity.icon as keyof typeof LucideIcons];

  return (
    <button
      onClick={() => onClick(deity)}
      className="group mythology-card p-6 rounded-lg transition-all duration-500 transform hover:-translate-y-1 text-left w-full hover:scale-105"
    >
      <div className="flex items-start gap-4">
        <div className="mythology-icon p-3 rounded-full">
          <Icon className="w-6 h-6 text-amber-300" />
        </div>
        <div>
          <h3 className="mythology-title text-xl font-bold text-amber-100 group-hover:text-amber-300 mb-2">
            {deity.name}
          </h3>
          <p className="mythology-text text-sm text-amber-200/80 mb-2">{deity.title}</p>
          <p className="mythology-text text-xs text-amber-200/60">{deity.domain}</p>
        </div>
      </div>
    </button>
  );
};