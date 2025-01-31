export interface Monster {
    index: string;
    name: string;
    hit_points: number;
    strenght: number;
    armor_class: number;
    challenge_rating: number;
  }
  
  export interface Player {
    name: string;
    health: number;
    attack: number;
    defense: number;
  }
  