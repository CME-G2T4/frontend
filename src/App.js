import './App.css';
import {  Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Home from './pages/home.page';
import { Account } from './components/account/account.store.jsx';
import Tracking from './pages/tracking.page';
import Login from './pages/login.page';
import Order from './pages/order.page';
import Upload from './pages/upload.page.jsx';
import OrderDisplay from './pages/orderDisplay.page';
import FulfilmentDisplay from './pages/fulfilmentDisplay.page';

function App() {
  return (
    <Account>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order/:trackingNumber" element={<Order />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/display" element={<OrderDisplay />} />
        <Route path="/fulfilment" element={<FulfilmentDisplay />} />
      </Routes>
    </Account>
  )
}

export default App;
