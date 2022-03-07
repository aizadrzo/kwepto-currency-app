import React from "react";

const SearchCoins = ({ setSearch }) => {
  let clearChange = (e) => {
    setSearch("");
  };
  let handleChange = (e) => {
    setSearch(e.target.value);
    clearChange();
  };

  return (
    <form>
      <input type="text" placeholder="search coins" onChange={handleChange} />
    </form>
  );
};

export default SearchCoins;
