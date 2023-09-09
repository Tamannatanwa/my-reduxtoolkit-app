import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieShowDetail,
  getAllmovieShows,
  removeSelectedMovieShow,
} from "../../features/movies/movieSlice";
import "./MovieDetails.scss";
const MovieDetails = () => {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const data = useSelector(getAllmovieShows);
  useEffect(() => {
    dispatch(fetchAsyncMovieShowDetail(imdbID));
    return(()=>{
      dispatch(removeSelectedMovieShow())
    })
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
    {Object.keys(data).length===0?(<div>Loading...</div>):
    (<>
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <li className="fa fa-star"> : {data.imdbRating}</li>
          </span>
          <span>
            IMDB Votes <li className="fa fa-thumbs-up"> : {data.imdbVotes}</li>
          </span>
          <span>
            Runtim <li className="fa fa-film"> : {data.Runtime}</li>
          </span>
          <span>
            Year <li className="fa fa-calender"> : {data.Year}</li>
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
     </>)}
    </div>
  );
};
export default MovieDetails;
