import { BattleInterface } from "@organisms/BattleInterface";
import { Layout } from "@templates/Layout";

export const Combat = () => {
  const monster = { name: "Goblin", hp: 100 };
  const attack = () => console.log("Attaque !");

  return (
    <Layout>
      <BattleInterface monster={monster} attack={attack} />
    </Layout>
  );
};

export default Combat;