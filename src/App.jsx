import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cards from './components/Card';
import Pricing from './components/Pricing';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.add(theme);
    document.documentElement.classList.remove(theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <BrowserRouter>
      <Navbar />
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/api#pricing" element={<Pricing />} />
        <Route path="/api" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
