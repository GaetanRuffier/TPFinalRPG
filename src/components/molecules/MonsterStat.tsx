import { Monster } from "types/game";
import Stat from "@atoms/Stat";

interface MonsterCardProps {
  monster: Monster;
}

const MonsterCard: React.FC<MonsterCardProps> = ({ monster }) => (
  <div>
    <h2>{monster.name}</h2>
    <Stat label="PV" value={monster.hit_points} />
    <Stat label="Armure" value={monster.armor_class} />
    <Stat label="Niveau" value={monster.challenge_rating} />
  </div>
);

export default MonsterCard;