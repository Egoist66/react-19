import { useState, type FC } from "react";

export const FavoriteButton: FC = () => {
  const [isFavorite, toggleFavorite] = useState<boolean>(false);

  const handleFavorite = () => {
    toggleFavorite((isFavorite) => !isFavorite);
  };

  return (
    <button className="cursor-pointer" onClick={handleFavorite}>
      <span className="text-2xl">{isFavorite ? "❤️" : "🤍"}</span>
    </button>
  );
};
