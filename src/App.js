import StarshipList from "./StarshipList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StarshipDetail from "./StarshipDetail.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Yıldız Gemileri</h1>
        <Routes>
          <Route path="/" element={<StarshipList />} />
          <Route path="/starship/:id" element={<StarshipDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
