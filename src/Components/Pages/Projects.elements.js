import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media screen and (max-width: 991px) {
    & > h3 {
        padding-left: 15px;
        padding-right: 15px;
    }
}

`;