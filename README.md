# 🌐 React Practice Hub

This project is a **modular Single Page Application (SPA)** built with **React, TypeScript, TailwindCSS, and Vite**. It serves as a centralized workspace where I practice and build various complete apps by hand. Each app is independently routed and developed to showcase my front-end engineering capabilities.

## 📁 Project Structure

```
src/
│
├── apps/                # All complete standalone apps
│   ├── profile/         # Personal profile / portfolio app
│   ├── ShareBill/       # Bill splitting and tipping app
│   ├── usePopcorn/      # Movie rating and watchlist app
│   ├── ReactQuiz/       # Try React Quiz
│   └── ...              # Add more apps here
│
├── components/          # Shared UI components
├── context/             # Global context providers
├── hooks/               # Custom React hooks
├── provider/            # App-wide providers (Theme, Auth, etc.)
├── utils/               # Reusable utilities
├── types/               # Shared TypeScript types
├── global/              # Global styles or theme settings
│
├── App.tsx              # Layout and routing
├── main.tsx             # Entry point
├── index.css            # Tailwind & global styles
└── vite.config.ts       # Vite configuration
```

## 🧠 Key Features

- 🌗 **Theme Toggle** using custom `ThemeProvider`
- ⚛️ **TypeScript-typed** codebase for safety and clarity
- 🧩 Modular routing with **React Router**
- 🌈 **TailwindCSS** for rapid and consistent styling
- 🔌 Easily extendable for new apps and features

## 🚀 Current Apps

| App Name   | Path         | Description                             |
| ---------- | ------------ | --------------------------------------- |
| Profile    | `/`          | Personal profile card and details       |
| Share Bill | `/ShareBill` | Bill-splitting app with tip calculator  |
| Movies     | `/Movies`    | Popcorn movie app (search, rate, watch) |

## 🛠️ Setup & Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

## 🗺️ Add a New App

1. Create a new folder inside `apps/` (e.g., `apps/WeatherApp`).
2. Build your app components inside that folder.
3. Register your app in the `Exportation.tsx`:

```tsx
import WeatherApp from './apps/WeatherApp/WeatherApp';
import { WiDaySunny } from 'react-icons/wi';

{
  path: '/weather',
  title: 'Weather_App',
  element: <WeatherApp />,
  icon: <WiDaySunny />,
}
```

4. Done! It’s now included in the main layout.

## 📦 Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **React Icons**

5. Live Now on '/Repo_Name/Weather_App/'

## 👨‍💻 Author

**Mohamed ElSayed**  
Front-end Developer | React Enthusiast

---

_This project is actively maintained and continuously growing as I explore new ideas, components, and complete applications._ 🌟
