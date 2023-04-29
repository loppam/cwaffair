import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/navbar";
import Homepage from "./assets/homepage";
import Shopping from "./assets/shopping";
import Notfound from "./assets/notfound";
import Footer from './assets/footer'

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
