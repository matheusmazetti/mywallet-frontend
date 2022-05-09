import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    background: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    header{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 25px;
        margin-bottom: 22px;
    }

    header h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #ffffff;
        margin-right: 163px;
    }

    header ion-icon{
        font-size: 32px;
        color: #ffffff;
    }

    .register{
        width: 326px;
        height: 446px;
        background: #FFFFFF;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 13px;
    }

    .register h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }

    .buttons{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .entrada{
        width: 155px;
        height: 114px;
        background: #A328D6;
        border-radius: 5px;
        margin-right: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }

    .entrada ion-icon{
        font-size: 24px;
        color: #ffffff;
        margin-top: 10px;
        margin-left: 10px;
    }

    .entrada h1{
        width: 64px;
        height: 40px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
        margin-bottom: 10px;
        margin-left: 10px;
    }

    .saida{
        width: 156px;
        height: 114px;
        background: #A328D6;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }

    .saida ion-icon{
        font-size: 24px;
        color: #ffffff;
        margin-top: 10px;
        margin-left: 10px;
    }

    .saida h1{
        width: 44px;
        height: 40px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
        margin-bottom: 10px;
        margin-left: 10px;
    }

    .task{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .task h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #C6C6C6;
    }
    
    .task h2{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }

    .task h3{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: right;
    }

    .green{
        color: #03AC00;
    }

    .red{
        color: #C70000;
    }
`;