export const fetchMonsters = async () => {
    const response = await fetch("https://www.dnd5eapi.co/api/monsters");
    if (!response.ok) {
      throw new Error("Problème de chargement des monstres");
    }
    return response.json();
  };
  