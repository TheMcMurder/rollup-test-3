import React from 'react'
import * as ReactDOM from 'react-dom/client';
import RootComponent from './root.jsx';

const main = document.querySelector('main')
const root = ReactDOM.createRoot(main);
root.render(<RootComponent />)