import { FileHeart } from "lucide-react";
import { useContext, useState } from "react";
import { FavoritesContext } from "./FavoritesProvider";

export function FavoriteManual({ pdfName, pdfUrl = "", className = "" }) {
  const { favoriteManuals, setFavoriteManuals } = useContext(FavoritesContext);
  const isFavorite = favoriteManuals.some((item) => item.model === pdfName); //verifica se o manual já está na localStorage para atualizar o botão
  const [liked, setLiked] = useState(isFavorite);

  const newFavorite = {
    model: pdfName,
    url: pdfUrl,
  };

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
