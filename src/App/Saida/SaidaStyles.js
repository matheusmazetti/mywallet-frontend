import styled from 'styled-components';

export const Content= styled.div`
    width: 100%;
    height: 100vh;
    background: #8C11BE;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h1{
        width: 326px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #ffffff;
        text-align: start;
        margin-bottom: 40px;
        margin-top: 25px;
    }

    input{
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        border: 0px;
        margin-bottom: 13px;
    }

    button{
        width: 326px;
        height: 58px;
        background: #A328D6;
        border-radius: 5px;
        border: 0px;
        color: #ffffff;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
    }
`;