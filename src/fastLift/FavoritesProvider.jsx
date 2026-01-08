import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const FAVORITES_STORAGE_KEY = "favoriteManuals";

  const [favoriteManuals, setFavoriteManuals] = useState(() => {
    // Verificação de segurança para SSR
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem(FAVORITES_STORAGE_KEY); //evita erros de digitação
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(favoriteManuals)
    );
  }, [favoriteManuals]);

  return (
    <FavoritesContext.Provider value={{ favoriteManuals, setFavoriteManuals }}>
      {children}
    </FavoritesContext.Provider>
  );
}
