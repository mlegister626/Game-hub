import apiClient from "@/services/api-client";
import { useState, useEffect } from "react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games")
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return { games, error };
};
export default useGames;
