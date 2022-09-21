import * as S from './WalletStyles';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';
import axios from 'axios';

export default function Wallet(){
    const navigate = useNavigate();
    const context = React.useContext(Context);
    const [obj, setObj] = React.useState([]);

    function Task({ data, name, value, type}){
        return(
            <div className='task'>
                <h1>{data}</h1>
                <h2>{name}</h2>
                <h3 className={(type === 'entrada') ? 'green':'red'}>{value}</h3>
            </div>
        )
    }

    function Tasks(){
        if(obj.length === 0){
            return(
                <div className='register'>
                    <h1>Não há registros de entrada ou saída</h1>
                </div>
            )
        } else {
            return(
                <div className='register'>
                    {obj.map((task) => {
                        return(
                            <Task data={task.date} name={task.name} value={task.value} type={task.type}/>
                        )
                    })}
                </div>
            )
        }
    }

    React.useEffect(() => {
        let sendObj = {
            email: context.user.email,
            token: context.user.token
        };
        let promisse = axios.post('https://backen-mywallet-matheusmazetti.herokuapp.com/alltasks', sendObj);
        promisse.then((res) => setObj(res.data));
        promisse.catch((res) => console.log(res));
    }, [context.user.token, context.user.email])
    return(
        <S.Content>
            <header>
                <h1>{`Olá, ${context.user.user}`}</h1>
                <ion-icon name="exit-outline" onClick={() => navigate('/')}></ion-icon>
            </header>
            <Tasks />
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
