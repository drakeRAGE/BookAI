# BookAI Website

Welcome to the BookAI website repository! This project is a front-end prototype for the BookAI platform, featuring a navigation bar, cards section, API pricing sections, and a light/dark mode toggle, all built with React and styled using Tailwind CSS.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Contributing](#contributing)
- [Contact](#contact)

## Overview

This project is a responsive and modern web interface for the BookAI platform. It includes a clean navigation bar, a detailed cards section for showcasing features, a comprehensive API pricing section, and a theme toggle for light and dark modes. The design aims to provide an intuitive user experience while maintaining a sleek and professional appearance.

## Demo

You can see the deployed site at the https://book-ai-beta.vercel.app/

## Tech Stack

- **React** - A JavaScript library for building user interfaces
- **Tailwind CSS** - A utility-first CSS framework for styling
- **JavaScript** - The core programming language for building the interactive parts of the project
- **HTML5** - The standard markup language for creating web pages

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/bookai-website.git
   cd bookai-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

This will launch the project in your default web browser, and the development server will hot-reload as you make changes.

## Usage

Once the project is set up, you can start modifying the code to fit your needs. The main components of the website include:

- **Navbar**: Located in `src/components/Navbar.js`, it features a logo and navigation links.

- **Cards Section**: Found in `src/components/Card.js`, it showcases the main features of the BookAI platform.

- **API Pricing Section**: Available in `src/components/Pricing.js`, it details the pricing plans for the API services.

- **Theme Toggle**: Implemented in `src/components/ThemeToggle.jsx`, it allows users to switch between light and dark modes.

### Deployment

To deploy the project, build it for production:

```bash
npm run build
```

This will generate a `build/` directory with the production-ready static files. You can then deploy these files to any static site hosting service like GitHub Pages, Netlify, or Vercel.

## Project Structure

```plaintext
bookai-website/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Card.js
│   │   ├── Pricing.js
│   │   └── ThemeToggle.jsx
│   ├── App.js
│   ├── index.js
│   └── App.css
│
├── .gitignore
├── package.json
└── README.md
```

## Features

- **Responsive Design**: Fully responsive layout that adapts to different screen sizes, including mobile, tablet, and desktop.

- **Interactive Navbar**: A stylish and functional navigation bar with smooth transitions.

- **Dynamic Cards Section**: Display feature cards with dynamic content.

- **API Pricing Section**: Comprehensive pricing table with clear call-to-action buttons.

- **Light/Dark Mode Toggle**: A theme toggle switch that allows users to easily switch between light and dark modes.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes. Make sure to update tests as appropriate.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Create a pull request

## Contact

For any inquiries or issues, feel free to open an issue on the repository or contact me at:

- **Email**: crashbrown2004@gmail.com
- **GitHub**: [DrakeRAGE](https://github.com/DrakeRage)

---

Thank you for checking out the BookAI website project! We hope you find it useful and look forward to your contributions.
```
