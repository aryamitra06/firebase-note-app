import React from "react";
import Main from "./views/Main";
import EditScreen from "./views/EditScreen";
import Navbar from "./components/Navbar";
import { Toaster } from 'react-hot-toast';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [toggle, setToggle] = React.useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main toggle={toggle} setToggle={setToggle} />} />
        <Route exact path="/edit/:id" element={<EditScreen setToggle={setToggle} />} />
      </Routes>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </BrowserRouter>
  );
}

export default App;
