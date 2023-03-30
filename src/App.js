import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./style/Logo.PNG";
import HomePage from "./pages/HomePage.jsx";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar>
        <button onClick={()=>console.log("Clicado em Login")}><img src={Logo}/></button>
        <div className="pesquisarDiv">
          <input type="text"/>
          <button onClick={()=>console.log("Clicado em pesquisar")}>Pesquisar</button>
        </div>
        <div className="loginDiv">
          <button className="primeiroButton" onClick={()=>console.log("Clicado em Login")}>Login</button>
          <button className="segundoButton" onClick={()=>console.log("Clicado em Cadastrar")}>Cadastrar</button>
        </div>
      </Navbar>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
      <Footer>Maax Fitness </Footer>
    </BrowserRouter>

    </>
  );
}

const Navbar = styled.div`
  height: 77px;
  background-color: #CC0000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button{
    border:none;
    background-color: #CC0000;
  }
  img{
    margin-left: 43px;
    width: 151px;
    height: 57px;
    border-radius: 9px;
  }
  .pesquisarDiv input{
    width: 359px;
    height: 42px;
    border-radius: 9px;
    margin-right:9px;
  }

  .pesquisarDiv button{
    width: 74px;
    height: 23px;
    border-radius: 9px;
    border: 2px solid black;
    background-color: #CC0000;
  }

  .loginDiv .primeiroButton{
    width: 100px;
    height: 42px;
    border-radius: 9px;
    background-color: green;
    border: none;
    margin-right: 8px;
  }

  .loginDiv .segundoButton{
    width: 100px;
    height: 42px;
    border-radius: 9px;
    background-color: green;
    border: none;
    margin-right: 8px;
  }

  .loginDiv{

  }

`

const Footer = styled.div`
  display: flex;
 `
