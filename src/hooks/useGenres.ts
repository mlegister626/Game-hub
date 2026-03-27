import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
export interface Genre {
  id: number;
  name: string;
  slug: string;
}
interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((response) => {
        setIsLoading(false);
        setGenres(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        {
          setError(error.message);
          setIsLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);
  return { genres, error, isLoading };
};
export default useGenres;
