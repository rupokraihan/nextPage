import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      {/* Header */}
      <Header></Header>
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default App;