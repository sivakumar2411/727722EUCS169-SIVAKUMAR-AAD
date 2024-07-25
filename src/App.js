import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignPage from "./Components/SignPage";

// import './App.css';
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Navbar/>}/>
      <Route path="/Home" exact element={<Navbar/>}/>
      <Route path="/Sign" exact element={<SignPage/>}/>
    </Routes>
  );
}

export default App;
