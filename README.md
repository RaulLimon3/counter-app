# ➕ Counter App

A responsive and accessible counter app implemented with both vanilla JavaScript and React. It features increment, decrement, and reset controls.

---

## 🚀 Live Demo

🔗  [JavaScript Version](https://counter-app-pearl-chi.vercel.app)
🔗  [React Version](https://counter-app-react-peach.vercel.app)

---

## 📸 Screenshots

![Mobile](./screenshots/mobile-view.png)

![Responsive Design](./screenshots/responsive-design.png)

![Interaction](./screenshots/app-interaction.png)

---

## Project Overview

This project was first developed using Vanilla JavaScript and later migrated to React. The goal was to reinforce JavaScript fundamentals and understand how the same application can be structured using a component-based library.

---

## ✨ Features

- Increment the counter by one.
- Decrement the counter by one.
- Reset the counter to zero.
- Prevent the counter from going below zero by disabling the decrement and reset buttons at zero.
- Use the app on mobile and desktop with a responsive layout.
- Navigate and operate the controls using a keyboard.
- Hear counter updates announced by screen readers.

---

## 🛠️ Tech Stack

### Vanilla

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Vite
- Lucide
- Google Fonts

### React

- React
- React DOM
- JavaScript (ES modules and JSX)
- CSS3
- Vite
- Lucide React

---

## 📁 Project Structure

```
counter-app/
├── README.md
├── screenshots/
│   ├── app-interaction.png
│   ├── mobile-view.png
│   └── responsive-design.png
├── react/
│   ├── public/
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon.ico
│   │   └── site.webmanifest
│   ├── src/
│   │   ├── assets/
│   │   │   └── fonts/
│   │   │       └── PressStart2P-Regular.ttf
│   │   ├── components/
│   │   │   ├── Button.jsx
│   │   │   └── buttons.css
│   │   ├── css/
│   │   │   └── base/
│   │   │       ├── font.css
│   │   │       ├── reset.css
│   │   │       └── variables.css
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
└── vanilla/
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── public/
    │   ├── android-chrome-192x192.png
    │   ├── android-chrome-512x512.png
    │   ├── apple-touch-icon.png
    │   ├── favicon-16x16.png
    │   ├── favicon-32x32.png
    │   ├── favicon.ico
    │   └── site.webmanifest
    └── src/
        ├── assets/
        │   └── fonts/
        │       └── PressStart2P-Regular.ttf
        ├── css/
        │   ├── base/
        │   │   ├── fonts.css
        │   │   ├── normalize.css
        │   │   ├── reset.css
        │   │   └── variables.css
        │   └── main.css
        ├── js/
        │   ├── app.js
        │   └── icon.js
        ├── main.js
        └── style.css
```

---

## 🎯 Learning Objectives

### JavaScript

- Practice selecting and updating DOM elements with JavaScript.
- Handle user interactions with event listeners.
- Manage application state and keep the interface synchronized with it.
- Use conditionals to enforce counter limits and control button states.
- Create reusable functions to enable and disable buttons.
- Apply semantic HTML and accessibility practices, including native disabled states and live announcements.
- Organize JavaScript with ES modules and style the app with a mobile-first, responsive approach.

### React

- Manage component state with the `useState` hook.
- Build reusable components and pass data and event handlers through props.
- Render the interface declaratively based on the current state.
- Derive button disabled states from the counter value.

---

## 🔮 Future Improvements

- Add subtle animations and transitions to improve interaction feedback.
- Add a dark mode.
- Add Tailwind CSS to the React version.

---

## ⚙️ Getting Started

### Prerequisites

- Node.js
- npm

### Vanilla JavaScript

1. Clone the repository:

```bash
   git clone https://github.com/RaulLimon3/counter-app.git
```

2. Navigate to the Vanilla project:

```bash
   cd counter-app/vanilla
```

3. Install dependencies:

```bash
   npm install
```

4. Start the development server:

```bash
   npm run dev
```

### React

1. Clone the repository:

```bash
   git clone https://github.com/RaulLimon3/counter-app.git
```
2. Navigate to the React project:

```bash
   cd counter-app/react
```

3. Install dependencies:

```bash
   npm install
```

4. Start the development server:

```bash
   npm run dev
```

---

## 👨‍💻 Author

Developed by **Raúl Limón**  
Frontend Developer focused on building scalable and maintainable web applications while continuously improving JavaScript and frontend architecture skills.

- GitHub: [RaulLimon3](https://github.com/RaulLimon3)  
- LinkedIn: [Raúl Limón](https://www.linkedin.com/in/raul-limon-garcia/)