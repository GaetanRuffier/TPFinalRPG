import { useCombatStore } from '@store/combat';
import StartBattleButton from '@atoms/StartBattleButton';



const Combat = () => {
  const { playerHP, monsterHP, monster, playerAttack, endBattle, isBattleActive } = useCombatStore();
  
  if (!isBattleActive || !monster) {
    return <div><StartBattleButton /></div>;
  }

  return (
    <div>
    
      
      <h1>⚔️ Combat contre {monster.name}</h1>

      <div>
        <div>
          <h2>👤 Joueur</h2>
          <p>❤️ PV : {playerHP}</p>
        </div>

        <div>
          <h2>👹 {monster.name}</h2>
          <p>❤️ PV : {monsterHP}</p>
        </div>
      </div>

      <div>
        <button onClick={playerAttack}>
          🗡 Attaquer
        </button>
        <button onClick={endBattle}>
          🏳 Fuir
        </button>
      </div>
    </div>
  );
};

export default Combat;
