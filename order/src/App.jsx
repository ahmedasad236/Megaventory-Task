import './App.css';
import NavBar from './Components/layout/NavBar/NavBar';
import AllOrders from './Pages/AllOrders/AllOrders';
import { Routes, Route } from 'react-router-dom';
import Order from './Pages/Order/Order';

function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<AllOrders />}
        />
        <Route
          path="/orders"
          element={<AllOrders />}
        />
        <Route
          path="/orders/:orderId"
          element={<Order />}
        />
      </Routes>
    </div>
  );
}

export default App;
