import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import painelhero from "../assets/painelhero.jpeg"


const Header = styled.header`

    height: 100vh;
    padding-bottom: 100px;
    @media (max-width: 400px) {
        height: 30vh;
    }
    @media (max-width: 1200px) {
        height: 80vh;
    }
    @media (max-width:800px) {
        height: 60vh;
        padding-bottom: 300px;
    }
    @media (max-width:600px) {
      height: 40vh;
      padding-bottom: 420px;
    }
`
const BackgroundImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

const Titulo = styled.h1`
    color: var(--cor-verde-sec);
    font-size:2em;
    display: inline-block;
    font-family: monospace;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid black;
    width: 0;
    animation: typing 5s steps(12, end) infinite, blink 0.5s step-end infinite;
    @keyframes typing {
    0% {
      width: 0;
    }
    50% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }
  
  @keyframes blink {
    0%, 50% {
      border-color: transparent;
    }
    51%, 100% {
      border-color: black;
    }
  }


`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    flex-wrap: wrap;
`

const Links = styled.div`
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    a {
        text-decoration:none;
        color: var(--cor-verde-sec);
        font-size:20px;
    }
`

const Aba = styled.a`
    text-decoration: none;
    font-size: 23px;
    color: #FFFFFF;
`

const Botao = styled.button`
    font-size: 23px;
    padding: 1.2rem;
    border-radius: 40px;
    background-color: var(--cor-verde-sec);
    border: none;
    cursor: pointer;
    &:hover {
        background-color: transparent;
        border: var(--cor-verde-sec) solid 1px;
        transition: .7s;
        color: var(--cor-verde-sec);
    }
    @media (max-width: 1050px) {
        display: none;
    }
`

const Secao = styled.section`
    text-align: center;
    margin-top: 8rem;
    color: var(--cor-verde-sec);
    h1 {
        font-size: 65px;
    }
    p {
        font-size: 30px;
    }
    @media (max-width: 960px) {
        margin-top: 0;
    }
    @media(max-width: 750px) {
        p {
        display: none;
        }
        }
    @media(max-width: 650px) {
        h1 {
            display: none;
        }
    }

    button {
        padding: 1rem;
        background-color: var(--cor-verde-sec);
        border: none;
        border-radius: 60px;
        width: 20rem;
        margin-top: 4rem;
        font-size: 30px;
        cursor: pointer;
        &:hover {
            background-color: transparent;
            border: var(--cor-verde-sec) solid 1px;
            transition: .7s;
            color: var(--cor-verde-sec);
        }
    @media (max-width: 1050px) {
        display: none;
    }
    }
`


export default function Cabecalho() {
    return (
        <Header id="home">
            <BackgroundImage src={painelhero} alt="Background" />
            <Nav>
                <div>
                    <Titulo>Solarix</Titulo>
                </div>
                <Links>
                    <a href="#home">Home</a>
                    <a href="#energias">Energias</a>
                    <a href="#contato">Contato</a>
                </Links>
                <Botao>Vamos Salvar o Mundo</Botao>
            </Nav>
            <Secao>
            <h1>Construindo um mundo sustentável <br /> com soluções <span class="animacao-global">globais</span></h1>
            <p>Somos uma organização que visa o foco em fontes <br /> sustentáveis, em especial a Solar.</p>
            <a href="#energias"><button>Veja mais</button></a>
            </Secao>
        </Header>
    )
}