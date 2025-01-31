import { AttackButton } from "@atoms/AttackButton";
import { MonsterCard } from "@molecules/MonsterCard";

export const BattleInterface = ({ monster, attack }: { monster: any; attack: () => void }) => {
  return (
    <div>
      <MonsterCard name={monster.name} hp={monster.hp} />
      <AttackButton onClick={attack} />
    </div>
  );
};