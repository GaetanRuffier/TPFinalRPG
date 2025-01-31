import { create } from "zustand";
import { Player } from "types/game";

interface PlayerState {
  player: Player;
  setPlayer: (player: Player) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  player: {
    name: "Héros",
    health: 100,
    attack: 10,
    defense: 5,
  },
  setPlayer: (player) => set({ player }),
}));
