import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import Footer from "@/components/footer";
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>);
