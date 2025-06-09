# collective-animal-nouns

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing Guidelines](#contributing-guidelines)
- [Testing](#testing)
- [Authors and Acknowledgements](#authors-and-acknowledgements)
- [Questions](#questions)
- [Troubleshooting](#troubleshooting)

## Description

A responsive web application showcasing **collective nouns for animals** with stunning GSAP animations. Built with React, TypeScript, and Express.js, this project demonstrates advanced animation techniques using SplitText and ScrollTrigger.

**Key Highlights:**
- ✨ Alternating character and word animations across panels
- 📱 Optimized for iOS and mobile devices  
- 🎯 Smooth ScrollTrigger integration with React
- 🎨 Beautiful typography animations with random staggering

## Technologies Used

- Frontend: Vite, React, TypeScript, Tailwind CSS, GSAP, @gsap/react
- Backend: Node.js, Express
- Deployment: Render

## Features

### 🎬 Animations
- **SplitText Animations**: Character-by-character reveals with two distinct patterns
- **ScrollTrigger Integration**: Animations trigger as panels enter viewport
- **Pattern Alternation**: Even panels use scale+slide, odd panels use rotation effects
- **Mobile Optimized**: Longer durations and better timing for touch devices

### 📱 Responsive Design
- Mobile-first approach with Tailwind CSS
- Sticky panel layering effect
- Touch-friendly scroll interactions

### 🏗️ Technical Implementation
- Modern React with TypeScript
- useGSAP hook for proper cleanup and React integration
- Express.js backend with environment configuration
- Deployment-ready with Render

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- GSAP account (for ScrollTrigger/SplitText)

### Quick Start

1. **Clone the repository:**
```bash
git clone git@github.com:gina-t/collective-animal-nouns.git
cd collective-animal-nouns
```

2. **Install dependencies:**
```bash
# Install both client and server dependencies
npm run install:all
# OR manually:
cd client && npm install
cd ../server && npm install
```

3. **Set up environment variables:**
```bash
# In server directory, create .env.development
echo "PORT=3001\nNODE_ENV=development\nLOG_LEVEL=info" > server/.env.development
```

4. **Start development servers:**
```bash
npm run dev  # Starts both client and server
```

🚀 **App will be running at:**
- Frontend: http://localhost:5173
- Backend: http://localhost:3001

## Usage

Link to deployed app url:

[Collective Animal Nouns](https://collective-animal-nouns.onrender.com)

**Demo Video:**

[🎬 Watch App Demo](https://drive.google.com/file/d/13qjeIEnhtFunas5cz-9eEjCiF7IARzkL/view?usp=sharing)

*Click the link above to view the full screen recording demonstrating the app's functionality and animations.*


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributing Guidelines

Contributions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add this feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## Testing

Component testing can be performed using Cypress.

To install and run tests:

```zsh
npm install --save-dev cypress
npx cypress open
```

## Authors and Acknowledgements

- **Dr. Gina Tsanaktsidis** - Full Stack Developer and Ophthalmologist
- Email: [ginadrcoder@gmail.com](mailto:ginadrcoder@gmail.com)

Special thanks to The University of Sydney Coding Boot Camp for their excellent curriculum and support.

## Questions

For enquiries, please contact me at:

- Email: [ginadrcoder@gmail.com](mailto:ginadrcoder@gmail.com)

- GitHub: [gina-t](https://github.com/gina-t)

## Troubleshooting

### Common Issues

**Animations not working:**
- Ensure GSAP is properly installed: `npm list gsap @gsap/react`
- Check browser console for ScrollTrigger errors
- Verify fonts are loaded before animations start

**iOS Animation Issues:**
- Animations are optimized for iOS with longer durations
- ScrollTrigger config includes `ignoreMobileResize: true`

**Build Errors:**
- Clear node_modules: `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version compatibility

