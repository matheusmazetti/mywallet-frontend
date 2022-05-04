import { Link } from 'react-router-dom';
import * as S from './RegisterStyles';

export default function Register(){
    return(
        <S.Content>
            <h1>MyWallet</h1>
            <input placeholder="Nome"></input>
            <input placeholder="E-Mail"></input>
            <input placeholder="Senha"></input>
            <input placeholder="Confirme a senha"></input>
            <button>Cadastrar</button>
            <Link to='/' >Já tem uma conta? Entre agora!</Link>
        </S.Content>
    )
}