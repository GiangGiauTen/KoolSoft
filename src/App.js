import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

import { CartProvider } from './context/CartContext';
function App() {
  return (
    <Router>
      <div className="App">
        <CartProvider>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;
