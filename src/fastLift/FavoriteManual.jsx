import { FileHeart } from "lucide-react";
import { useState, useEffect } from "react";

export function FavoriteManual({ pdfName, pdfUrl = "", className = "" }) {
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

  const handleFavorite = () => {
    setLiked(!liked);

    if (liked) {
      //ao desfavoritar - retorna lista sem o item clicado
      const updatedFavorites = favoriteManuals.filter(
        (item) => item.model !== pdfName
      );
      setFavoriteManuals(updatedFavorites);
    } else {
      setFavoriteManuals((prev) => [...prev, newFavorite]);
    }
  };

  return (
    <div>
      <FileHeart
        onClick={handleFavorite}
        className={`
           transition-collors duration-300 cursor-pointer
          ${liked ? "text-amber-300" : "text-gray-400 hover:text-gray-200"}
          ${className}
          `}
        size={34}
      />
    </div>
  );
}
