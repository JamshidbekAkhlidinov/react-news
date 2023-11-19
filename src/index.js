import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/header/header";
import Main from "./components/content/main";
import Footer from "./components/footer/footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
        <Main/>
        <Footer/>
    </React.StrictMode>
);
