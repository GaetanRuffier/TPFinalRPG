import { useMonsters } from "@api/useMonsters";
import MonsterStat from "@molecules/MonsterStat";

const MonsterList: React.FC = () => {
  const { data: monsters, isLoading, error } = useMonsters();

  if (isLoading) return <p>Chargement des monstres...</p>;
  if (error) return <p>Erreur lors du chargement des monstres.</p>;

  return (
    <div>
      {monsters?.map((monster) => (
        <MonsterStat key={monster.index} monster={monster} />
      ))}
    </div>
  );
};

export default MonsterList;
