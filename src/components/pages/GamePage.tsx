import PlayerStats from "@organisms/PlayerStats";
import MonsterList from "@organisms/MonsterList";

const GamePage: React.FC = () => {
  return (
    <div>
      <h1>Exploration & Combat</h1>
      <div>
        <PlayerStats />
        <MonsterList />
      </div>
    </div>
  );
};

export default GamePage;
