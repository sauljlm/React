import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';

const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

fetch(url)
    .then(data => data.json())
    .then(data => {
        localStorage.setItem('data', JSON.stringify(data._embedded.episodes))
    });

ReactDOM.render(<App />,document.getElementById('root'));
