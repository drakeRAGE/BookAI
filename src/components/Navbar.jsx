import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-[90%] max-w-[1200px] mx-auto py-5 px-5">
      <header className="flex justify-between items-center flex-wrap">
        <div className="flex items-center text-foreground font-bold text-2xl">
          <div className="w-[30px] h-[30px] bg-gradient-to-r from-[#726bff] to-[#57b6fe] rounded-full mr-2"></div>
          <img
            src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
            alt="BookAI Logo"
            className="w-[50px] mr-2"
          />
          <Link to='/'>BookAI</Link>
        </div>
        <nav className="flex items-center flex-wrap mt-5 md:mt-0">
          <a href="#features" className="text-foreground ml-5 font-light transition-colors duration-300 ease-in-out hover:text-[#8a2be2]">
            Features
          </a>
          <a href="#how-it-works" className="text-foreground ml-5 font-light transition-colors duration-300 ease-in-out hover:text-[#8a2be2]">
            How It Works
          </a>
          <a href="#roadmap" className="text-foreground ml-5 font-light transition-colors duration-300 ease-in-out hover:text-[#8a2be2]">
            Roadmap
          </a>
          <a href="/api" className="text-foreground ml-5 font-light transition-colors duration-300 ease-in-out hover:text-[#8a2be2]">
            API
          </a>
          <a href="/api#pricing" className="text-foreground ml-5 font-light transition-colors duration-300 ease-in-out hover:text-[#8a2be2]">
            Price
          </a>
          <a href="/api#models" className="text-foreground ml-5 font-light transition-colors duration-300 ease-in-out hover:text-[#8a2be2]">
            Models
          </a>
          <a href="/login" className="inline-block ml-5 py-3 px-5 bg-gradient-to-r from-[#726bff] to-[#57b6fe] text-foreground rounded-md transition-colors duration-300 ease-in-out hover:opacity-90">
            Login / Sign Up
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
