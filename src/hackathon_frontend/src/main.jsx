import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <App />
      <Footer />
    </div>
  </React.StrictMode>
);
