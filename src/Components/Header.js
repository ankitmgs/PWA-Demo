import React, { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [timeoutId, setTimeoutId] = useState();

  const onTextChange = (event) => {
    setSearchQuery(event.target.value);
    const timeout = setTimeout(
      () => console.log("API calling", 500),
      setTimeoutId(timeout)
    );
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Movie-Platform</a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={onTextChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
