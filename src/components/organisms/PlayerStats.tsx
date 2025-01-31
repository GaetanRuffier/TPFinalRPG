import { usePlayerStore } from "@store/playerStore";
import Stat from "@atoms/Stat";

const PlayerStats: React.FC = () => {
  const { player } = usePlayerStore();

  return (
    <div>
      <h2>{player.name}</h2>
      <Stat label="PV" value={player.health} />
      <Stat label="Attaque" value={player.attack} />
      <Stat label="Défense" value={player.defense} />
    </div>
  );
};

export default PlayerStats;
