import {
  Pagination
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUpcomingMovies } from "../../Redux/Action/moviesAction";
import MovieCard from "../MovieCard";
import Loader from "../layout/Loader";
export const Upcoming = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { upcomingMovie, loading, } = useSelector((state) => state.movie);
  console.log(upcomingMovie);
  useEffect(() => {
    dispatch(getAllUpcomingMovies(currentPage));
  }, [dispatch, currentPage]);

  if (loading) {
    return <Loader />;
  }
  console.log(currentPage);
  return (
    <div className="home">
      <div className="heading p-6">
        <h1 className="text-white text-3xl font-bold">New Released Movie</h1>
      </div>

      <div className="movie-list grid grid-cols-8 gap-3 justify-items-center m-6 overscroll-y-auto">
        {upcomingMovie.results &&
          upcomingMovie.results.map((item, index) => (
            <MovieCard
              image={item.poster_path}
              title={item.title}
              releaseDate={item.release_date}
              key={index}
            />
          ))}
      </div>

      {/* pagination */}
      <div className="pagination-controller flex justify-center text-white">
        <Pagination
          total={upcomingMovie.total_pages}
          initialPage={1}
          page={currentPage}
          showShadow={true}
          radius="full"
          boundaries={1}
          showControls={true}
          className="flex"
          dotsJump={1}
          variant="bordered"
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};