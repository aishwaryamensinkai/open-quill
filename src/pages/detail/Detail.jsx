import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import "./detail.scss";
import CastList from "./CastList";
import VideoList from "./VideoList";
import MovieList from "../../components/movie-list/MovieList";

const Detail = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await tmdbApi.detail(category, id, { params: {} });
        setItem(response);
        window.scrollTo(0, 0);
        setIsInWatchlist(checkWatchlist(id));
      } catch (err) {
        console.error("Failed to fetch movie details:", err);
        setError(err);
      }
    };
    getDetail();
  }, [category, id]);

  const checkWatchlist = (movieId) => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    return watchlist.includes(movieId);
  };

  const handleWatchlist = () => {
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    if (watchlist.includes(id)) {
      watchlist = watchlist.filter((movieId) => movieId !== id);
    } else {
      watchlist.push(id);
    }
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    setIsInWatchlist(!isInWatchlist);
  };

  if (error) {
    return <div className="errorLoading">Error loading movie details. Please try again later.</div>;
  }

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">{item.title || item.name}</h1>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className="genres__item">
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{item.overview}</p>
              <div className="abtns">
                <button onClick={handleWatchlist}>
                  {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
                </button>
              </div>
              <div className="cast">
                <div className="section__header">
                  <h2>Casts</h2>
                </div>
                <CastList id={item.id} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
              <VideoList id={item.id} />
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Similar</h2>
              </div>
              <MovieList category={category} type="similar" id={item.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
