import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

import HomePage from 'pages/HomePage';
import ContactPage from 'pages/ContactPage';
import FeaturePage from 'pages/FeaturePage';
import ServicePage from 'pages/ServicePage';
import LoginPage from 'pages/LoginPage';

import Navbar from 'components/navbar/Navbar';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/feature" element={<FeaturePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;