# Sudarshan Portfolio - Data Engineer

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases the professional experience, projects, skills, and education of a data engineer.

## Features

- Responsive design that works on all devices
- Modern animations using Framer Motion
- Interactive UI elements
- Dark theme
- Contact form with email functionality
- Custom cursor
- Loading animations

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone git@github.com:YuichiNabeshima/sudarshan-portfolio.git
cd sudarshan-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173` to see the portfolio.

## Post-Clone Setup

After cloning the repository, follow these steps to customize the portfolio for your own use:

1. **Update personal information**:
   - Edit `src/components/Hero.tsx` to change the name, title, and introduction
   - Modify `src/components/About.tsx` to update the bio, skills, and experience years
   - Update `src/components/Experience.tsx` with your work history
   - Change `src/components/Projects.tsx` to showcase your own projects
   - Edit `src/components/Education.tsx` with your educational background and certifications
   - Update `src/components/Contact.tsx` with your contact information

2. **Replace placeholder images**:
   - Replace the placeholder images with your own photos
   - For profile picture, replace the placeholder in `src/components/About.tsx`
   - For project images, update the image paths in `src/components/Projects.tsx`

3. **Customize colors and styling**:
   - The main color scheme can be adjusted in `tailwind.config.js`
   - To change the primary color, modify the purple and indigo color values

4. **Configure the contact form**:
   - Update the `contactEmail` variable in `src/components/Contact.tsx` with your email address
   - Test the form by submitting a test message
   - The first time someone submits the form, you'll receive an activation email from FormSubmit

5. **Update metadata**:
   - Edit `index.html` to change the title, description, and favicon
   - Update social media links in `src/components/Contact.tsx`

6. **Test on different devices**:
   - Use the browser's developer tools to test responsiveness on different screen sizes
   - Test on actual mobile devices if possible

7. **Build and deploy**:
   - Once you're satisfied with your changes, build the project using `npm run build`
   - Deploy to your preferred hosting platform (see Deployment section)

## Customization

You can customize the portfolio by editing the files in the `src` directory.
