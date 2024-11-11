import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './utils/style/global.scss';

// Utilisation de React.lazy pour charger les pages uniquement quand l'utilisateur navigue vers elles
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Bio = lazy(() => import('./pages/Bio'));
const Contact = lazy(() => import('./pages/Contact'));

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Suspense fallback={<div>Chargement...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/bio" element={<Bio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Suspense>
            <Footer />
        </Router>
    </React.StrictMode>
);
