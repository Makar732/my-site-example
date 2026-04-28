import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Твой домен с Railway (замени на свой, если он отличается)
const RAILWAY_HOST = "my-site-example-production.up.railway.app"; 

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '5173')
  },
  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '4173'),
    // 👇 ВОТ ЭТА СТРОКА ИСПРАВЛЯЕТ ОШИБКУ
    allowedHosts: [RAILWAY_HOST, '.railway.app'] 
  }
});
