import { create } from "zustand";

interface GameState {
  health: number;
  gold: number;
  setHealth: (health: number) => void;
  addGold: (amount: number) => void;
}

export const useGameStore = create<GameState>((set) => ({
  health: 100,
  gold: 10,
  setHealth: (health) => set({ health }),
  addGold: (amount) => set((state) => ({ gold: state.gold + amount })),
}));
