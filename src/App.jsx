import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

  console.log(theme)

  return (
    <Router>
      <Navbar />
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/api#pricing" element={<Pricing />} />
        <Route path="/api" element={<Pricing />} />
      </Routes>
    </Router>
  );
};

export default App;
