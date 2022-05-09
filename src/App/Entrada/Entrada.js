import * as S from './EntradaStyles';
import React from 'react';
import Context from '../Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

export default function Entrada(){
    const [value, setValue] = React.useState(0);
    const [name, setName] = React.useState('');
    const context = React.useContext(Context);
    const navigate = useNavigate();
    function sendTask(){
        if(value !== 0 && name !== ''){
            let obj = {
                email: context.user.email,
                token: context.user.token,
                name: name,
                type: "entrada",
                value: value
            }
            let promisse = axios.post("https://backen-mywallet-matheusmazetti.herokuapp.com/task", obj);
            promisse.then(() => navigate('/wallet'));
            promisse.catch(() => alert('Erro. Tente novamente!'));
        } else {
            alert('Preencha todos os campos');
        }
    }

    return(
        <S.Content>
            <h1>Nova entrada</h1>
            <input placeholder="Valor" type="number" value={value} onChange={e => setValue(e.target.value)}></input>
            <input placeholder="Descrição" type="text" value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={sendTask}>Salvar entrada</button>
        </S.Content>
    )
}