import styled from "styled-components"

const Secao = styled.section`
    display: grid;
    margin: 5rem 5rem;
    grid-template-areas:
        "titulo-contato negocios sobrenos faleconosco email"
    ;
    font-size:20px;
    @media (max-width:1300px) {

    .tirar {
        display:none;
    }
    }

    @media (max-width:670px) {
    grid-template-areas:
        "titulo-contato"
        "email";
    gap: 5rem;
}
`

const Infos = styled.div`
    display:flex;
    flex-direction:column;
    gap: 1rem;
    form {
        display:flex;
        gap: 0.5rem;
        flex-wrap:wrap;
    }
    input {
        width: 20rem;
        padding: 1.5rem;
        background-color: var(--cor-branca);
        border: 1px var(--cor-verde-sec) solid;
        border-radius: 60px;
        font-size: 20px;
        outline: none;
        @media(max-width:460px) {
            width: 12rem;
        }
    }
`
const Titulo = styled.h1`
    color:black;
`
const Subtitulo = styled.h2`
    color: var(--cor-verde-sec);
`

const Links = styled.a`
    a{
        text-decoration:none;
        color: #000000;
    }
`
const LinksContato = styled.a`
    a {
        text-decoration:none;
        color: var(--cor-verde-sec);
    }
`
const BotaoEnviar = styled.button`
    width:5rem;
    border-radius: 60px;
    border: var(--cor-verde-sec) 2px solid;
    background-color: var(--cor-branca);
    font-size:16px;
    cursor: pointer;
    &:hover {
        background-color: var(--cor-verde-sec);
        transition: .7s;
    }
`


export default function Contato() {
    return(
        <Secao id="contato">
            <Infos>
            <Titulo>Solarix</Titulo>
            <h4>Grandes negócios <br />de sustentabilidade</h4>
            </Infos>
            <div class="tirar">
            <Subtitulo>Soluções</Subtitulo>
            <Links><a href=""><p>Python</p></a></Links> 
            <Links><a href=""><p>Edge</p></a></Links>
            </div>
            <div class="tirar">
            <Subtitulo>A Solarix</Subtitulo>
            <Links><a href=""><p>HUB</p></a></Links>
            <Links><a href=""><p>Sobre nós</p></a></Links>
            </div>
            <div class="tirar">
            <LinksContato><a href=""><h2>Fale conosco</h2></a></LinksContato>
            <LinksContato><a href=""><h2>Trabalhe Conosco</h2></a></LinksContato>
            <LinksContato><a href=""><h2>Política de privacidade</h2></a></LinksContato>
            </div>
            <Infos>
            <Subtitulo>Entre em contato com nós</Subtitulo>
            <p>Caso queira falar com nós, insira seu e-mail abaixo</p>
            <form action="">
                <input type="email" placeholder="Email" name="" id="" />
                <BotaoEnviar>Enviar</BotaoEnviar>
            </form>          
            </Infos>
      </Secao>
    )
}