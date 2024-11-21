import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tiposenergiaData from './tiposenergia.json';
import { Link } from "react-router-dom";

const Tipos = styled.div`
  display: grid;
  justify-content: space-around;
  grid-template-areas: 
    "1 2 3" 
    "4 5 6";
  @media (max-width:1390px) {
    grid-template-areas:
    "1 2"
    "3 4"
    "5 6";
  }
  @media (max-width:920px) {
    grid-template-areas:
    "1"
    "2"
    "3"
    "4"
    "5"
    "6";
  }

  div {
    width: 30rem;
    background-color: #8dc9a4;
    margin-top: 2rem;
    height: auto;
    max-height: 3rem; 
    padding: 1rem 2rem; 
    border-radius: 60px;
    color: #FFFFFF;
    overflow: hidden; 
    transition: max-height 1.5s ease-in-out; 
    cursor: pointer;

    @media (max-width:580px) {
      width:15rem;
      overflow-y: scroll;
    }
    
    &:hover {
      max-height: 30rem; 
    }

    h2 {
      font-size: 36px;
    }

    h3 {
      font-size: 25px;
      margin-top: 1rem;
    }

    h3,p, ul {
      display: none;
    }

    &:hover p,
    &:hover ul,
    &:hover h3 {
      display: block; 
    }

    li {
      color: #000000;
      list-style-type: none;
    }
  }
`;

const TitulosEnergias = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin:5rem 5rem 0rem 5rem;
  flex-wrap:wrap;
  gap: 3rem;
`

const Titulo = styled.h5`
  width: 75vw;
  font-size: 40px;
  border-bottom: 4px solid hsl(143, 36%, 67%);
`

const Botao = styled.button`
  width: 17rem;
  border-radius: 60px;
  font-size: 26px;
  padding: 1.5rem;
  background-color: var(--cor-verde-sec);
  color: #000000;
  border: none;
  font-family: "Space Grotesk", sans-serif;
  cursor: pointer;
  &:hover {
    background-color: #f2f8f5;
    transition: .7s;
    border: var(--cor-verde-sec) 1px solid;
    color: var(--cor-verde-sec);
  }
`

const TiposDeEnergia = () => {
  const [energyTypes, setEnergyTypes] = useState([]);

  useEffect(() => {
    setEnergyTypes(tiposenergiaData.energyTypes);
  }, []);

  return (
    <div>
      <TitulosEnergias>
        <Titulo>Dados das Energia</Titulo>
        <Link to="/"><Botao>Veja a Lista</Botao></Link>
      </TitulosEnergias>
      <Tipos>
        {energyTypes.map((energia, index) => (
          <div key={index}>
            <h2>{energia.name}</h2>
            <p>{energia.description}</p>
            <h3>Impacto Ambiental:</h3>
            <ul>
              <li><strong>Positivo:</strong> {energia.impactoAmbiental.positivo}</li>
              <li><strong>Negativo:</strong> {energia.impactoAmbiental.negativo}</li>
            </ul>
            <h3>Custo:</h3>
            <ul>
              <li><strong>Investimento Inicial:</strong> {energia.custo.investimentoInicial}</li>
              <li><strong>Manutenção:</strong> {energia.custo.manutencao}</li>
              <li><strong>Custos Operacionais:</strong> {energia.custo.custosOperacionais}</li>
            </ul>
            <h3>Acessibilidade:</h3>
            <p>{energia.acessibilidade}</p>
          </div>
        ))}
      </Tipos>
    </div>
  );
};

export default TiposDeEnergia;
