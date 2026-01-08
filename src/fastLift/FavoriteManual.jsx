import { FileHeart } from "lucide-react";
import { useState, useEffect } from "react";

export function FavoriteManual({ pdfName, pdfUrl = "", className = "" }) {
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
