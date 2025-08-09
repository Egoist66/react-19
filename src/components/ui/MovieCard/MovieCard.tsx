import type { FC } from "react";
import type { MovieCardprops } from "./MovieCard.types";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

export const MovieCard: FC<MovieCardprops> = ({ image, rating, className, setValue, val }) => {

  console.log('render', MovieCard.name);
  return (
    <div
      className={`${MovieCard.name}-wrapper cursor-pointer relative w-[200px] rounded-2xl overflow-hidden bg-neutral-900 shadow-lg hover:scale-105 transition-transform will-change-transform duration-300`}
    >
      <img
        className={`${MovieCard.name}-image w-full h-[250px] object-cover ${className}`}
        src={image}
        alt={image.split("/").pop() || "Movie Image"}
      />

      <div className="flex justify-between items-center p-2">
        <p
          className={`${MovieCard.name}-rating w-full text-sm text-white font-semibold`}
        >
          IMDB: {rating}
        </p>

        <FavoriteButton />
      </div>

         <button onClick={() => setValue((val) => val + 1)}>
              Increment {val}
          </button>
    </div>
  );
};
