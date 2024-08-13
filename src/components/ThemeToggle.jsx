import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <div className="fixed top-5 right-5">
      <button
        onClick={toggleTheme}
        className="bg-gradient-to-r from-[#726bff] to-[#57b6fe] text-foreground p-4 mt-2 rounded-full transition duration-300"
      >
        {theme === 'dark' ? <BsSun size={24} /> : <BsMoon size={24} />}
      </button>
    </div>
  );
};

export default ThemeToggle;
