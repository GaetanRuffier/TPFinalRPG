const Home = () => {
    return (
      <div>
        <h1>Bienvenue dans le RPG</h1>
        <p>Choisissez une action :</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>  
            <a href="/GameStat">Statistique joueur et monstres</a>
            <a href="/exploration">Explorer</a>
            <a href="/combat">Combattre</a>
        </div>
      </div>
    );
  };
  
  export default Home;