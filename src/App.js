import React from "react";
import Main from "./views/Main";
import EditScreen from "./views/EditScreen";
import Navbar from "./components/Navbar";
import { Toaster } from 'react-hot-toast';
import { Offline, Online } from "react-detect-offline";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import OfflineComponent from "./components/OfflineComponent";

function App() {

  const [toggle, setToggle] = React.useState(false);

  return (
    <>
    <Online>
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
    </Online>
      <Offline>
        <OfflineComponent/>
      </Offline>
    </>
  );
}

export default App;
