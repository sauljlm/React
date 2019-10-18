import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import './index.css';

const url = 'https://api.pokemontcg.io/v1/cards';


async function loadData() {
    const response = await fetch(url);
    const data = await response.json();
    localStorage.setItem('data', JSON.stringify(data));
}

function startRender() {
    ReactDOM.render(<App />,document.getElementById('root'));
}

window.onload = function() {
    loadData();
    startRender();
};
