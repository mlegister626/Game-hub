import Platform from "./useGames";
import platforms from "../data/platforms";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const { data, isLoading, error } = {
    data: platforms,
    isLoading: false,
    error: null,
  };
  return { data, isLoading, error };
};

export default usePlatforms;
