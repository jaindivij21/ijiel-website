import React from 'react';
import { createRoot } from 'react-dom/client';

// Import all of our components
import App from './app';

const MainApp = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Event listener for when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement!);
  root.render(<MainApp />);
});