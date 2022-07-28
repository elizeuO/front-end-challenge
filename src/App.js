import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Archive from "./pages/Archive";
import Single from "./pages/Single";

import Header from "./components/header/header";

function App() {
  return (
    <Router>
      <Header />

      <Routes>

        <Route path="/" element={<Archive/>}>
        </Route>

        <Route path="/" element={<Single/>}>
        </Route>

      </Routes>

    </Router>
  );
}

export default App;
