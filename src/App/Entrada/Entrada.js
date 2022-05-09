import * as S from './EntradaStyles';
import React from 'react'; 

export default function Entrada(){
    return(
        <S.Content>
            <h1>Nova entrada</h1>
            <input placeholder="Valor"></input>
            <input placeholder="Descrição"></input>
            <button>Salvar entrada</button>
        </S.Content>
    )
}