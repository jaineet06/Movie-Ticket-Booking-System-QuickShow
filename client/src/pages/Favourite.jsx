import React, { useContext } from "react";
import MovieCard from "../components/MovieCard.jsx";
import BlurCircle from "../components/BlurCircle";
import { AppContext } from "../context/AppContext.jsx";

const Favourite = () => {
  const { favMovies } = useContext(AppContext);

  return favMovies.length > 0 ? (
    <div className="relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
      <BlurCircle top="150px" left="0px" />
      <BlurCircle bottom="50px" right="50px" />
      <h1 className="text-lg font-medium my-5">My Favourites</h1>
      <div className="flex flex-wrap max-sm:justify-center gap-8">
        {favMovies.slice(0, 2).map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center">No movies available</h1>
    </div>
  );
};

export default Favourite;
