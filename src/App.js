import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stats from './components/Stats/Stats';
import Homepage from './components/Homepage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
