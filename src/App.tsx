import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Portfolio } from "./pages/Portfolio";

import InvoiceGen from "./projects/invoice-gen/App";
// import FloatingHeader from './components/common/FloatingHeader';
import Layout from "./components/Layout";
import MiniShop from "./projects/minishop/App";

type ThemeContextValue = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const themeContext = createContext<ThemeContextValue>({
  darkMode: false,
  setDarkMode: () => undefined,
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

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
