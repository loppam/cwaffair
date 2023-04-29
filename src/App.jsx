import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from './assets/contact'
import Navbar from "./assets/navbar";
import Homepage from "./assets/homepage";
import Shopping from "./assets/shopping";
import Notfound from "./assets/notfound";
import Footer from './assets/footer'

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes basename="/cwaffair">
          <Route path="/" element={<Homepage />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/#contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
