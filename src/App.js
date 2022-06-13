import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppStyle from "./style/App.scss";
import "./style/Nav.scss";
import { Index } from "./pages/Index";
import { Catalog } from "./pages/Catalog";
import { Form } from "./pages/Form";
//mport {ReduxExample}  from "./components/ReduxExample";

export const AppContext = React.createContext();
function App() {
  

  return (
    <div>
    
      <AppContext.Provider value={AppStyle }>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
      </AppContext.Provider>
     
    </div>
  );
}

export default App;
