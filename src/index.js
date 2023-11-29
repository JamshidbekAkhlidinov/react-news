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
        'photo': "903-500x300.jpg",
        'title': "Test lorem ipsum date app 1",
    },
    {
        'photo': "903-500x300.jpg",
        'title': "Test lorem ipsum date app 2",
    },
    {
        'photo': "903-500x300.jpg",
        'title': "Test lorem ipsum date app 3",
    },
    {
        'photo': "903-500x300.jpg",
        'title': "Test lorem ipsum date app 4",
    },
    {
        'photo': "903-500x300.jpg",
        'title': "Test lorem ipsum date app 5",
    },
    {
        'photo': "903-500x300.jpg",
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
