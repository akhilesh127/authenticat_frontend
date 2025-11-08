import Login from "./login";
import Signup from "./signup";
import Home from "./home";
import Nav from "./nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast'

function App() {
  return (
    
    <BrowserRouter>
          <Toaster />
      <Nav />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
       
      </Routes>
    </BrowserRouter>
  )

}
export default App;
