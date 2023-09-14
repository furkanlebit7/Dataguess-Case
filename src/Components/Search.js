import React, { useState } from "react";

const Search = ({ setInput, setGroup }) => {
  const [text, setText] = useState("");
  const handleInput = (value) => {
    setText(value);
    const group = value.split(" ")[1];
    const input = value.split(" ")[0];
    setGroup(group ? group : "All");
    setInput(input ? input : "");
  };

  return (
    <div className="flex flex-col text-white mt-10 md:mt-20">
      <div className="glass  rounded-md">
        <input
          value={text}
          onChange={(e) => handleInput(e.target.value)}
          type="text"
          placeholder="search:tt group:size"
          className="w-full h-12 px-4  outline-none text-2xl bg-transparent  placeholder:text-white "
        />
      </div>
      <button
        className="mb-10 md:mb-20 mt-4 p-2 px-3 bg-white bg-opacity-40 rounded-md self-end"
        onClick={() => handleInput("English 5")}
      >
        Example Usage
      </button>
    </div>
  );
};

export default Search;
