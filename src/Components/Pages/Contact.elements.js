import styled from "styled-components";



export const Wrapper = styled.div`
height: 90vh;
margin: auto;
display: flex;
flex-direction: column;
padding-left: 60px;
padding-right: 60px;
justify-content: center;

@media screen and (max-width: 991px) {
    height: 100vh;
}
`;



export const Heading = styled.div`
margin-top: 5%;
margin-bottom: 2%;
display: flex;
font-size: 30px;
font-weight: 700;
text-transform: capitalize;
justify-content: center;

@media screen and (max-width: 991px) {
    font-size: 25px;
}
`;



export const BgText = styled.p`
display: flex;
font-size: 20px;
justify-content: center;


@media screen and (max-width: 991px) {
    font-size: 15px;
}
`;



export const LilText = styled.p`
display: flex;
font-size: 18px;
justify-content: center;

@media screen and (max-width: 991px) {
    font-size: 13px;
}
`;


export const FormWrapper = styled.div`
margin-top: 3%;
justify-content: center;
width: 100%;
height: 80%;
`;