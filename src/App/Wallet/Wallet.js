import * as S from './WalletStyles';
import { useNavigate } from 'react-router-dom';

export default function Wallet(){
    const navigate = useNavigate();
    return(
        <S.Content>
            <header>
                <h1>Olá, Fulano</h1>
                <ion-icon name="exit-outline"></ion-icon>
            </header>
            <div className='register'>
                <h1>Não há registros de entrada ou saída</h1>
            </div>
            <div className='buttons'>
                <div className='entrada' onClick={() => navigate('/entrada')}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <h1>Nova entrada</h1>
                </div>
                <div className='saida' onClick={() => navigate('/saida')}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <h1>Nova saída</h1>
                </div>
            </div>
        </S.Content>
    )
}