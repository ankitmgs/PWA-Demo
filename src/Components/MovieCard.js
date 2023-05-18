import React from "react";

const MovieCard = () => {
  return (
    <div className="container">
      <div className="card" style={{ width: "18rem", padding: "0.5rem" }}>
        <img
          className="card-img-top"
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
        />
        <div className="card-body" style={{ paddingLeft: "0" }}>
          <div className="card-title">Avengers</div>
          <div className="card-subtitle text-muted">Year: 2016</div>
          <div className="card-subtitle text-muted">Type: Movie</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
