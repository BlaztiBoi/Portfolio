import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Portfolio } from "./pages/Portfolio";

import InvoiceGen from "./projects/invoice-gen/App";
// import FloatingHeader from './components/common/FloatingHeader';
import Layout from "./components/Layout";
import MiniShop from "./projects/minishop/App";
const themeContext = createContext<T | undefined>(undefined);
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Router>
      <div className="font-inter">
        <themeContext.Provider value={{ darkMode, setDarkMode }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Portfolio />} />
            </Route>
            <Route path="projects">
              <Route path="invoice-gen" element={<InvoiceGen />} />
              <Route path="minishop" element={<MiniShop />} />
            </Route>
          </Routes>
        </themeContext.Provider>
      </div>
    </Router>
  );
}
export { themeContext };
export default App;
