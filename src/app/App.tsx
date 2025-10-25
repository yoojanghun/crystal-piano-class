import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.tsx";
import Apply from "../pages/Apply.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/apply" element={<Apply />}></Route>
      </Routes>
    </BrowserRouter> 
  )
}

export default App
