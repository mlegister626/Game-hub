import useData from "./useData";
import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const { data, isLoading, error } = {
    data: genres,
    isLoading: false,
    error: null,
  };

  return { data, isLoading, error };
};
export default useGenres;
