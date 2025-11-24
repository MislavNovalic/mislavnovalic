# Mislav Novalić - Resume Website

This is a personal portfolio/resume website built with Angular. It showcases education, work, skills, and interests.

**Live Site:** [https://mislavnovalic.github.io/mislavnovalic/](https://mislavnovalic.github.io/mislavnovalic/)

## Features

- ✅ Responsive design with mobile-first approach
- ✅ Fixed sidebar navigation with smooth scrolling
- ✅ Bootstrap 4 styling with green theme
- ✅ Font Awesome icons for social media
- ✅ Devicon for technology/programming language icons
- ✅ Sections: About, Education, Work, Skills, Interests
- ✅ Links to projects (JavaScript Calculator)
- ✅ Social media integration (Twitter, LinkedIn, GitHub)

## Technology Stack

- **Framework:** Angular 21.0.0
- **Styling:** Bootstrap 4.6.2, Custom CSS
- **Icons:** Font Awesome, Devicon
- **Fonts:** Google Fonts (Ubuntu, Saira Extra Condensed, Open Sans)

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Navigation sidebar
│   │   ├── about/           # About section with personal info
│   │   ├── education/       # Education history
│   │   ├── work/            # Work/projects showcase
│   │   ├── skills/          # Programming skills & tools
│   │   └── interests/       # Personal interests
│   ├── services/
│   │   └── data.ts          # Data service for content management
│   └── ...
├── assets/
│   └── img/
│       └── profile.jpg      # Profile picture
└── styles.css               # Global styles
```

## Setup & Installation

### Prerequisites

- Node.js (v20 or higher)
- npm (v10 or higher)
- Angular CLI (`npm install -g @angular/cli`)

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/MislavNovalic/mislavnovalic.git
cd mislavnovalic
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200/mislavnovalic/`

## Building for Production

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/angular-resume/browser/` directory.

## Deployment to GitHub Pages

This project is configured for GitHub Pages deployment with the base href set to `/mislavnovalic/`.

### Manual Deployment

1. Build the project:
```bash
ng build --configuration production
```

2. Copy the contents of `dist/angular-resume/browser/` to the root of your `gh-pages` branch or deploy directory.

3. Ensure GitHub Pages is enabled in your repository settings, pointing to the correct branch.

### Automated Deployment (Recommended)

You can set up GitHub Actions for automated deployment. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/angular-resume/browser
```

## Content Management

All content (personal information, education, skills, etc.) is managed in `src/app/services/data.ts`. Edit this file to update:

- Personal information (name, tagline)
- Social media links
- Education entries
- Work/project links
- Skills and technologies
- Interests

## Additional Files

The repository also includes:
- `calculator.html` - JavaScript Calculator demo
- `bookmakerapp.html` - Bookmaker app demo

These files are automatically copied to the build output and are accessible at:
- `/mislavnovalic/calculator.html`
- `/mislavnovalic/bookmakerapp.html`

## Contributing

This is a personal portfolio site. All code is free to use, and contributions are welcome.

## License

Free to use and modify.

---

**This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0.**
