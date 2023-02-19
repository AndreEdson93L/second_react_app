import { useState } from "react";
import "./App.css";
import Dog from "./Components/Dog";
import DogPage from "./Pages/DogPage";
import JokePage from "./Pages/JokePage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import NavBar from "./Components/NavBar";

//npm i react-router-dom

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<DogPage />} />
          <Route path="/jokes" element={<JokePage />} />
          <Route
            path="*"
            element={
              <>
                <h1>Nothing here!</h1>
                <NavLink to="/">Return Home</NavLink>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
