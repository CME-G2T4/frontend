import logo from './logo.svg';
import './App.css';
import {  Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Home from './pages/home.page';
import Store from './components/store/store.component.jsx';
import Tracking from './pages/tracking.page.jsx';
import Upload from './pages/upload.page.jsx';
import OrderDisplay from './pages/orderDisplay.page';

function App() {
  return (
    <Store>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/display" element={<OrderDisplay />} />
        </Routes>
    </Store>
  );
}

export default App;
