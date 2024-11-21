import styled from "styled-components"
import { Link } from "react-router-dom"
import biomassa from "../assets/biomassa.jpg"
import eolica from "../assets/eolica.jpg"
import geotermica from "../assets/geotermica.webp"
import hidreletrica from "../assets/hidreletrica.jpg"
import ondas from "../assets/ondas.webp"
import solar from "../assets/solar.jpg"


const Lista = styled.main`
  font-family: "Space Grotesk", sans-serif;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  grid-auto-rows: auto;
  padding: 20px;
  margin-left: 50px;
  margin-right: 50px;

  @media (max-width: 1390px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    justify-items: center;
  }

  h5 {
    margin-top: 30px;
    margin-left: 80px;
    width: 90vw;
    font-size: 40px;
    border-bottom: 4px solid hsl(143, 36%, 67%);
  }

  h2 {
    font-size: 2.25rem;
    font-family: var(--fonte-principal);
    color: var(--cor-branca);
  }

  p {
    font-family: var(--fonte-principal);
    font-size: 1rem;
    color: var(--cor-branca);
    margin-bottom: 10px;
  }

  @media (max-width: 1467px) {
    margin-left: 0;
  }

  @media (max-width: 925px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    justify-items: center;
  }
  
  .card>* {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  .card {
    display: grid;
    place-items: center;
    width: 200vw;
    max-width: 27rem;
    height: 30rem;
    overflow: hidden;
    border-radius: 0.625rem;
    box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
    @media(max-width:925px) {
      width: 90%;
      margin-bottom: 20px;
    }

    .card-fundo {
      object-fit: cover;
      max-width: 100%;
      height: 100%;
      transition: transform 500ms ease-in;
    }

    .card-conteudo {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-self: flex-end;
      height: 55%;
      padding: 12% 1.25rem 1.875rem;
      background: linear-gradient(180deg,
          hsla(0, 0%, 0%, 0) 0%,
          hsla(0, 0%, 0%, 0.3) 10%,
          hsl(0, 0%, 0%) 100%);
      transform: translateY(62%);
      transition: transform 500ms ease-out;
      transition-delay: 500ms;
      .card-secao {
        .card-titulo {
          position: relative;
          width: fit-content;
          width: -moz-fit-content;
          &::after {
            content: "";
            position: absolute;
            height: 0.3rem;
            width: calc(100% + 1.25rem);
            bottom: calc((1.25rem - 0.5rem) * -1);
            left: -1.25rem;
            background-color: var(--cor-verde-sec);
          }
        }
        p {
          margin-top:2rem;
        }
      }
    }
    &:focus-within .card-conteudo{
      transition-duration: 0ms;
    }
    &:hover:focus-within {
      transform: scale(1.05);
      transition: transform 500ms ease-in;
    }
    &:hover .card-conteudo, :focus-within .card-conteudo {
      transform: translateY(0);
      transition: transform 500ms ease-in;
    }
    &:hover .card-fundo, :focus-within .card-fundo {
      transform: scale(1.3);
    }
  }
  .card-titulo::after {
    opacity: 0;
    transform: scaleX(0);
    transition: opacity 1000ms ease-in, transform 500ms ease-out;
    transition-delay: 500ms;
    transform-origin: right;
  }

  .card-secao> :not(.card-titulo),
  .card__button {
    opacity: 0;
    transition: transform 500ms ease-out, opacity 500ms ease-out;
  }

  .card:hover .card-secao> :not(.card-titulo),
  .card:hover .card__button,
  .card:focus-within .card-secao> :not(.card-titulo),
  .card:focus-within .card__button {
    opacity: 1;
    transition: opacity 500ms ease-in;
    transition-delay: 1000ms;
  }

  .card:hover .card-titulo::after,
  .card:focus-within .card-titulo::after {
    opacity: 1;
    transform: scaleX(1);
    transform-origin: left;
    transition: opacity 500ms ease-in, transform 500ms ease-in;
    transition-delay: 500ms;
  }
`

const Titulo = styled.h5`
  width: 75vw;
  font-size: 40px;
  border-bottom: 4px solid hsl(143, 36%, 67%);
  @media(max-width:800px) {
    width: 30vw;
  }
`

const ApresentacaoTitulo = styled.div`
  display:flex;
  align-items:center;
  margin:5rem 5rem 0 5rem;
  flex-wrap: wrap;
  gap:3rem;
`

const BotaoEnergias = styled.button`
  width: 20rem;
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

  @media (max-width:420px) {
    width:15rem;
  }
`




export default function ListaEnergias() {
  return (
    <>
    <ApresentacaoTitulo id="energias">
    <Titulo>Energias Renováveis</Titulo>
    <Link to="/tipos-energia"><BotaoEnergias>Veja Detalhes</BotaoEnergias></Link>
    </ApresentacaoTitulo>
    <Lista>
      <article class="card">
        <img
          class="card-fundo"
          src={eolica}
          alt="Usina eolica foto"
        />
        <div class="card-conteudo">
          <div class="card-secao">
            <h2 class="card-titulo">Eólica</h2>
            <p class="descricao-card">
              A energia eólica é uma fonte renovável gerada pelo vento. Turbinas eólicas capturam a força do vento e convertem essa energia cinética em eletricidade. É uma solução limpa e sustentável.
            </p>
          </div>
        </div>
      </article>
      <article class="card">
        <img
          class="card-fundo"
          src={solar}
          alt="Foto de uma usina eólica"
        />
        <div class="card-conteudo">
          <div class="card-secao">
            <h2 class="card-titulo">Solar</h2>
            <p class="descricao-card">
              A energia solar é gerada a partir da luz do sol, por meio de painéis fotovoltaicos ou sistemas solares térmicos. É uma das fontes de energia renovável mais promissoras devido à abundância do sol em muitas regiões do mundo e ao seu impacto ambiental relativamente baixo
            </p>
          </div>
        </div>
      </article>
      <article class="card">
        <img
          class="card-fundo"
          src={hidreletrica}
          alt="Foto de uma usina eólica"
        />
        <div class="card-conteudo">
          <div class="card-secao">
            <h2 class="card-titulo">Hidrelétrica</h2>
            <p class="descricao-card">
              A energia hidrelétrica é gerada a partir do movimento da água, geralmente em grandes represas. Quando a água é liberada e passa por turbinas, ela gera eletricidade. É uma das fontes mais utilizadas no mundo por sua alta capacidade de produção e eficiência
            </p>
          </div>
        </div>
      </article>
      <article class="card">
        <img
          class="card-fundo"
          src={biomassa}
          alt="biomassa"
        />
        <div class="card-conteudo">
          <div class="card-secao">
            <h2 class="card-titulo">Biomassa</h2>
            <p class="descricao-card">
              A energia de biomassa é gerada a partir da queima ou decomposição de materiais orgânicos, como madeira, resíduos agrícolas e até lixo orgânico. Essa transformação libera calor, que pode ser usado para gerar eletricidade ou aquecer ambientes
            </p>
          </div>
        </div>
      </article>
      <article class="card">
        <img
          class="card-fundo"
          src={geotermica}
          alt="Foto de uma usina eólica"
        />
        <div class="card-conteudo">
          <div class="card-secao">
            <h2 class="card-titulo">Geotérmica</h2>
            <p class="descricao-card">
              A energia geotérmica utiliza o calor interno da Terra para gerar eletricidade ou aquecer diretamente ambientes. Esse calor é extraído de fontes como geisers, fontes termais e vulcões. É uma fonte de energia estável e constante,tornando-a ideal para fornecimento contínuo de energia.
            </p>
          </div>
        </div>
      </article>
      <article class="card">
        <img
          class="card-fundo"
          src={ondas}
          alt="Foto de uma usina eólica"
        />
        <div class="card-conteudo">
          <div class="card-secao">
            <h2 class="card-titulo">Ondas</h2>
            <p class="descricao-card">
              A energia das ondas é gerada a partir do movimento das ondas do mar, que é convertido em eletricidade por dispositivos flutuantes ou submersos, como bóias e turbinas. Essa fonte de energia é limpa, previsível e possui grande potencial, especialmente em áreas costeiras.
            </p>
          </div>
        </div>
      </article>
    </Lista>
    </>
  )

}