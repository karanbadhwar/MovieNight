import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";

import useFetch from "../../../hooks/useFetch";

const HeroBanner = () => {
  const [bg, setBg] = useState("");
  const [query, setQuery] = useState("");
  const naviagte = useNavigate();

  //Fetching the Upcoming movies for Background.
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bgRandom =
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;

    setBg(bgRandom);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      return naviagte(`/search/${query}`);
    }
  };

  return (
    <div>
      <div className="heroBanner">
        <div className="wrapper">
          <div className="heroBannerContent">
            <span className="title">Welcome.</span>
            <span className="subTitle">
              Millions of movies, TV shows and people to discover. Explore Now.
            </span>
            <div className="searchInput">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for a movie or tv show..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={(e) => searchQueryHandler(e)}
              />

              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
