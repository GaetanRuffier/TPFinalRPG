import { Monster } from "types/game";
import { create } from "zustand";
import { usePlayerStore } from '@store/player';
interface CombatState {
    playerHP: number;
    monsterHP: number;
    monster: Monster | null;
    turn: 'player' | 'monster';
    isBattleActive: boolean;
    specialAttackAvailable: boolean;
    startBattle: (monster: Monster) => void;
    playerAttack: () => void;
    playerSpecialAttack: () => void;
    monsterAttack: () => void;
    endBattle: () => void;
  }
  
  export const useCombatStore = create<CombatState>((set, get) => ({
    playerHP: 100,
    monsterHP: 0,
    monster: null,
    turn: 'player',
    isBattleActive: false,
    specialAttackAvailable: true,
  
    startBattle: (monster) => {
      set({ monster, monsterHP: monster.hit_points, isBattleActive: true, specialAttackAvailable: true });
    },
  
    playerAttack: () => {
      if (get().turn !== 'player') return;
  
      const damage = Math.floor(Math.random() * 10) + 5;
      set((state) => ({
        monsterHP: Math.max(0, state.monsterHP - damage),
        turn: 'monster'
      }));
  
      setTimeout(get().monsterAttack, 1000);
    },
  
    playerSpecialAttack: () => {
      if (get().turn !== 'player' || !get().specialAttackAvailable) return;
  
      const damage = Math.floor(Math.random() * 20) + 10; // Dégâts entre 10 et 30
      set((state) => ({
        monsterHP: Math.max(0, state.monsterHP - damage),
        specialAttackAvailable: false,
        turn: 'monster'
      }));
  
      setTimeout(get().monsterAttack, 1000);
    },
  
    monsterAttack: () => {
      if (get().turn !== 'monster' || !get().monster) return;

      set((state) => ({
        playerHP: Math.max(0, state.playerHP - 10),
        turn: 'player'
      }));
  
      if (get().playerHP <= 0) {
        set({ isBattleActive: false });
      }
    },
  
    endBattle: () => {
        if (get().monsterHP <= 0) {
          const rewardXP = 20;
          const rewardGold = 10;
          usePlayerStore.getState().addExperience(rewardXP);
          usePlayerStore.getState().addGold(rewardGold);
        }
      
        set({ isBattleActive: false, monster: null, monsterHP: 0 });
      }
  }));
  