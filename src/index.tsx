import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Termekek from './pages/Termekek';
import Termek from './pages/Termek';
import TermekPost from './pages/TermekPost';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="termekek" element={<Termekek />}></Route>
                <Route path="termek/:id" element={<Termek />}></Route>
                <Route path="termekpost" element={<TermekPost />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);

reportWebVitals();
