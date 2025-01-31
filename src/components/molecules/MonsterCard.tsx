import { HealthBar } from "@atoms/HealthBar";

export const MonsterCard = ({ name, hp }: { name: string; hp: number }) => {
  return (
    <div>
      <h3>{name}</h3>
      <HealthBar hp={hp} />
    </div>
  );
};
