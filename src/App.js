import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppStyle from "./style/app.scss";
import "./style/nav.scss";
import { Index } from "./pages";
import { Catalog } from "./pages/catalog";
import { Form } from "./pages/form";
import{Reducer} from "./pages/reducer";
//mport {ReduxExample}  from "./components/ReduxExample";

export const AppContext = React.createContext();
function App() {
  return (
    <div>
      <AppContext.Provider value={AppStyle}>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/form" element={<Form />} />
            <Route path="/reducer" element={<Reducer />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
