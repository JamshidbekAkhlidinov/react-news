import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/header/header";
import Main from "./components/content/main";
import Footer from "./components/footer/footer";

const root = ReactDOM.createRoot(document.getElementById('root'));

const number = Math.floor(Math.random() * 99);

const newsData = [
    {
        'photo': "https://picsum.photos/500/300?random=30",
        'title': "Test lorem ipsum date app 1",
    },
    {
        'photo': "https://picsum.photos/500/300?random=20",
        'title': "Test lorem ipsum date app 2",
    },
    {
        'photo': "https://picsum.photos/500/300?random=50",
        'title': "Test lorem ipsum date app 3",
    },
    {
        'photo': "https://picsum.photos/500/300?random=90",
        'title': "Test lorem ipsum date app 4",
    },
    {
        'photo': "https://picsum.photos/500/300?random=33",
        'title': "Test lorem ipsum date app 5",
    },
    {
        'photo': "https://picsum.photos/500/300?random=40",
        'title': "Test lorem ipsum date app 6",
    },
]

root.render(
    <React.StrictMode>
        <Header/>
        <Main data={newsData}/>
        <Footer/>
    </React.StrictMode>
);
