import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './LoginStyles';

export default function Login(){
    return(
        <S.Content>
            <h1>MyWallet</h1>
            <input placeholder='E-mail'></input>
            <input placeholder='Senha'></input>
            <button>Entrar</button>
            <Link to='/register' >Primeira vez? Cadastre-se</Link>
        </S.Content>
    )
}