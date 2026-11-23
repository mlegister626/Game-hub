import axios from "axios";

// Read from .env (local) or Vercel's Environment Variables (deployed).
const apiKey = import.meta.env.VITE_RAWG_API_KEY;

if (!apiKey) {
  console.error(
    "VITE_RAWG_API_KEY is missing. Add it to a .env file in the project root and restart the dev server.",
  );
}

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});

export default apiClient;
