import React from "react";

const Header = ({ handleDarkModeToggle }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="save"
        onClick={() => handleDarkModeToggle((prevMode) => !prevMode)}
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
