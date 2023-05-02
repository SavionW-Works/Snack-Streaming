import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const SearchBox = (props) => {
  return (
    <div className="col  mt-4">
      <input
        type="text"
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Search for Movies Here"
      ></input>
    </div>
  );
};

export default SearchBox;
