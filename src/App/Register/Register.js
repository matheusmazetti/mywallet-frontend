import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './RegisterStyles';
import axios from 'axios';

export default function Register(){
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [validation, setValidation] = React.useState('');
    let navigate = useNavigate();

    function sendRegister(){
        if(name !== '' && email !== '' && password !== '' && password === validation){
            let obj = {
                user: name,
                email: email,
                password: password
            };
            let promisse = axios.post('http://localhost:5000/register', obj);
            promisse.then(() => {
                navigate('/');
            })
            promisse.catch((e) => console.log(e));
        } else {
            alert('Preencha os campos corretamente');
        }
    }
    return(
        <S.Content>
            <h1>MyWallet</h1>
            <input placeholder="Nome" type='text' value={name} onChange={e => setName(e.target.value)}></input>
            <input placeholder="E-Mail" type='email' value={email} onChange={e => setEmail(e.target.value)}></input>
            <input placeholder="Senha" type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
            <input placeholder="Confirme a senha" type='password' value={validation} onChange={e => setValidation(e.target.value)}></input>
            <button onClick={sendRegister}>Cadastrar</button>
            <Link to='/'>Já tem uma conta? Entre agora!</Link>
        </S.Content>
    )
}