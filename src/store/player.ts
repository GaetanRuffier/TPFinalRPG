import { create } from 'zustand';

interface PlayerState {
  level: number;
  experience: number;
  gold: number;
  addExperience: (amount: number) => void;
  addGold: (amount: number) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  level: 1,
  experience: 0,
  gold: 0,

  addExperience: (amount) => set((state) => ({ experience: state.experience + amount })),
  addGold: (amount) => set((state) => ({ gold: state.gold + amount })),
}));
