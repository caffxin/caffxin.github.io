import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// 動態設定 Favicon，確保在 GitHub Pages 上也能正確載入
const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/svg+xml";
favicon.href = `${import.meta.env.BASE_URL}caffxin_tech.svg`;
document.head.appendChild(favicon);

// LINE 內建瀏覽器有時會自動加 #/s，這裡自動導回首頁
if (window.location.hash === '#/s') {
  window.location.hash = '#/';
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
