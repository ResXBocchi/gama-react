import styled from 'styled-components';



export const Omni = styled.div`
    margin-top:25%;
    max-width:100vw;
    max-height:100%;
    
`
export const Container = styled.div`
    width: 100vw;
    height: 3vh;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Input= styled.input`
    border: 1px solid #ddd;
    height: 2rem;
    padding: 0 .5rem;
    margin:12px 0 12px 12px;
    border-radius: .25rem 0 0 .25rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }

    `;

export const Button = styled.button`
    height: 2.1rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 5px 5px 0;
    
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
    
    `;
export const Erro = styled.p`
    color:red;
    font-weight:bolder;
`
