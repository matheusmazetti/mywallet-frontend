import * as S from './SaidaStyles'; 

export default function Saida(){
    return(
        <S.Content>
            <h1>Nova saída</h1>
            <input placeholder="Valor"></input>
            <input placeholder="Descrição"></input>
            <button>Salvar saída</button>
        </S.Content>
    )
}