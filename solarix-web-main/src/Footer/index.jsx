import Contato from "../Contato";
import styled from "styled-components";
import GitHubIcon from "../assets/github-brands-solid.svg";
import LinkedinIcon from "../assets/linkedin-brands-solid.svg";

const Rodape = styled.footer`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin: 0 5rem;
    margin-bottom:2rem;
    flex-wrap:wrap;
`

const Copyright = styled.p`
    
`

const IconesRodape = styled.div`
    display:flex;
    align-items:center;
    gap: 1rem;
    img {
        background-color:white;
        padding:1rem;
        border-radius:50%;
    }
    
`

export default function Footer() {
    return(
        <>
        <Contato></Contato>
        <Rodape>
            <IconesRodape>
                <a href="https://github.com/SolarixNova/solarix-web"><img width={40} src={GitHubIcon} alt="" /></a>
                <a href="https://www.linkedin.com/in/mohamedafif/"><img width={40} src={LinkedinIcon} alt="" /></a>
            </IconesRodape>
        <Copyright>&copy; 2024 Solarix. Todos os direitos reservados.</Copyright>
        </Rodape>
        </>
    )
}