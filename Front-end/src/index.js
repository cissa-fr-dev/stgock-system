import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import StockRoutes from './Pages/rotas';
import './style.css';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <StockRoutes />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
