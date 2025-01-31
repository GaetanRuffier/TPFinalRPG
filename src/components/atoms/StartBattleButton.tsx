import { useCombatStore } from '@store/combat';

const StartBattleButton = () => {
  const startBattle = useCombatStore((state) => state.startBattle);

  const startRandomBattle = () => {
    const randomMonster = {
      index: '0',
      name: 'Gobelin',
      hit_points: 50,
      strenght: 8,
      armor_class:2,
      challenge_rating:1
    };

    startBattle(randomMonster);
  };

  return (
    <button onClick={startRandomBattle}>
      ⚔️ Affronter un monstre
    </button>
  );
};

export default StartBattleButton;
