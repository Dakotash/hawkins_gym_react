import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Layout from './layout';
import NoPage from './pages/NoPage';
import Amenities from './pages/Amenities';
import Contact from './pages/Contact';
import Memberships from './pages/Memberships';
import Trainers from './pages/Trainers';
import './css/index.css';

const App = () => {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
  
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="amenities" element={<Amenities />} />
        <Route path="contact" element={<Contact />} />
        <Route path="memberships" element={<Memberships />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


