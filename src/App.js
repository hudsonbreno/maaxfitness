import styled from "styled-components";
import { BrowserRouter, Router, Routes } from "react-router-dom";
// import HomePage from "";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar>
        carla
      </Navbar>
      <Routes>
        <Router path="/" element={<HomePage />}/>    
      </Routes>
      <Footer>Maax Fitness </Footer>
    </BrowserRouter>

    </>
  );
}

const Navbar = styled.div`
  display: flex;
`

const Footer = styled.div`
  display: flex;
 `
