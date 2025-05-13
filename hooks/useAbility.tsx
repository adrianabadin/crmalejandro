import { useQuery } from "@tanstack/react-query";
import { Ability } from "../services/fetching";

export function useAbility(offset: number) {
  const myData = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => Ability(offset),
  });
  return myData;
}
