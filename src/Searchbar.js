import React, { useState } from "react";

const Searchbar = () => {
  const [text, setText] = useState("");

  return (
    <div className="form-input">
      <input
        type="text"
        className="form-controll"
        value={text}
        placeholder="Search for movie"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
