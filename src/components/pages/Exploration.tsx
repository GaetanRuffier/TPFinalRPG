import { useGameStore } from "@store/gameStore";

const Exploration = () => {
  const { health, gold, addGold } = useGameStore();

  return (
    <div>
      <h1>Exploration</h1>
      <p>Vie : {health} ❤️</p>
      <p>Or : {gold} 🪙</p>
      <button onClick={() => addGold(5)}>Trouver de l'or (+5)</button>
    </div>
  );
};

export default Exploration;
