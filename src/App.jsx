import styled from "styled-components"
import StartGame from "./components/StartGame"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePlay from "./components/GamePlay";

function App() {

  return (
<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<StartGame/>}/>
        <Route exact path="/play" element={<GamePlay/>}/>
      </Routes>
</BrowserRouter>
  )
}

export default App

const Button=styled.button`
  background-color: black;
  color: white;
  padding: 10px;
`