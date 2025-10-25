import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import Apply from "../pages/apply/Apply.tsx";

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
