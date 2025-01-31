import { useQuery } from "@tanstack/react-query";
import { Monster } from "types/game";

const fetchMonsters = async (): Promise<Monster[]> => {
  const response = await fetch("https://www.dnd5eapi.co/api/monsters");
  if (!response.ok) throw new Error("Erreur lors de la récupération des monstres");
  
  const data = await response.json();
  

  return data.results;
};

export const useMonsters = () => {
  return useQuery<Monster[]>({
    queryKey: ["monsters"],
    queryFn: fetchMonsters,
  });
};
