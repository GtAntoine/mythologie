import React, { useState } from 'react';
import { deities } from './data/deities';
import { DeityNode } from './components/DeityNode';
import { InfoCard } from './components/InfoCard';
import { Deity } from './types/mythology';
import './styles/mythology.css';

function App() {
  const [selectedDeity, setSelectedDeity] = useState<Deity | null>(null);

  const handleDeityClick = (deityId: string) => {
    const deity = deities.find((d) => d.id === deityId);
    if (deity) {
      setSelectedDeity(deity);
    }
  };

  return (
    <div className="mythology-bg min-h-screen">
      <div className="mythology-overlay min-h-screen py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="mythology-title text-4xl lg:text-6xl font-bold text-center mb-4 text-amber-100">
            La Mythologie Grecque
          </h1>

          <p className="mythology-text text-center text-amber-200/80 mb-16 max-w-2xl mx-auto text-lg">
            Découvrez les dieux et déesses de la mythologie grecque. Explorez
            leurs histoires, leurs relations et leurs domaines de pouvoir en
            cliquant sur chaque divinité.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {deities.map((deity) => (
              <DeityNode
                key={deity.id}
                deity={deity}
                onClick={setSelectedDeity}
              />
            ))}
          </div>

          {selectedDeity && (
            <InfoCard
              deity={selectedDeity}
              onClose={() => setSelectedDeity(null)}
              onDeityClick={handleDeityClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
