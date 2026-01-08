import { createContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const FAVORITES_STORAGE_KEY = "favoriteManuals";

  const [favoriteManuals, setFavoriteManuals] = useState(() => {
    // Verificação de segurança para SSR
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem(FAVORITES_STORAGE_KEY); //evita erros de digitação
    return saved ? JSON.parse(saved) : [];
  });

  const isFavorite = favoriteManuals.some((item) => item.model === pdfName); //verifica se o manual já está na localStorage para atualizar o botão
  const [liked, setLiked] = useState(isFavorite);

  const newFavorite = {
    model: pdfName,
    url: pdfUrl,
  };

  useEffect(() => {
    localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(favoriteManuals)
    );
  }, [favoriteManuals]);

  return (
    <FavoritesContext.Provider value={favoriteManuals}>
      {children}
    </FavoritesContext.Provider>
  );
}
