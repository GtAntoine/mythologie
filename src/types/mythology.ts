export interface Deity {
  id: string;
  name: string;
  title: string;
  domain: string;
  wikipediaUrl: string;
  description: string;
  relationships: Relationship[];
  icon: string;
}

export interface Relationship {
  type: 'parent' | 'sibling' | 'spouse' | 'child';
  with: string;
}

export interface InfoCardProps {
  deity: Deity;
  onClose: () => void;
  onDeityClick: (deityId: string) => void;
}