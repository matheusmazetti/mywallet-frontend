import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './LoginStyles';
import axios from 'axios';
import Context from '../Context';

export default function Login(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const context = React.useContext(Context);
    const navigate = useNavigate();

    function sendLogin(){
        let loginObj = {
            email: email,
            password: password
        };
        let promisse = axios.post('http://localhost:5000/login', loginObj);
        promisse.then((res) => {
            context.setUser(res.data);
            navigate('/wallet');
        });
        promisse.catch(() => alert('Erro. Tente novamente!'));
    }

    return(
        <S.Content>
            <h1>MyWallet</h1>
            <input placeholder='E-mail' type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
            <input placeholder='Senha' type="email" value={password} onChange={e => setPassword(e.target.value)}></input>
            <button onClick={sendLogin}>Entrar</button>
            <Link to='/register' >Primeira vez? Cadastre-se</Link>
        </S.Content>
    )
}