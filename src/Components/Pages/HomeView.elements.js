import styled from "styled-components";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HomeContainer } from "../../GlobalStyles";




export const Home = styled(HomeContainer)`
height: 90vh;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;


@media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 5%;
}

@media screen and (max-width: 350px) {
    margin-top: 25%;
}

${HomeContainer}
`;



export const HomeItems = styled.div`
font-family: 'Times New Roman', Times, serif;
font-size: 16px;
`;



export const Social = styled(Link)`
display: flex;
margin-top: 5%;
margin-right: 50%;
justify-content: space-between;
align-items: center;
font-size: 3rem;
color: black;

@media screen and (max-width: 991px) {
    margin-right: 0;
    font-size: 2rem;
}
`;



export const Links1 = styled( FaFacebook )`
&:hover{
    color: none;
}
`;

export const Links2 = styled( FaTwitter )`
&:hover{
    color: none;
}
`;

export const Links3 = styled( FaGithub )`
&:hover{
    color: none;
}
`;

export const Links4 = styled( FaLinkedin )`
&:hover{
    color: none;
}
`;
