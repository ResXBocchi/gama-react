import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width:100%;
    max-width:991px;
    margin:0 auto;
    

`

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`

export const List = styled.ul`
    list-style: none;
    padding:0;
    margin:20px;
    font-family:sans-serif;
    text-align:center;
    justify-content: center;
    align-items: center;
    
`
export const ListItem = styled.ul`
    background:#000;
    padding:.5rem;
    margin: 0 0 .5rem 0;
    color:#fff;
    border-radius:10px;
    max-width:100%;

    
`
export const LinkHome = styled(Link)`
    display:block;
    width:4rem;
    text-align:center;
    margin: 2rem auto;
    background-color:#000;
    padding: 0.5rem;
    color:white;
    text-decoration:none;
    border-radius:10px;
`