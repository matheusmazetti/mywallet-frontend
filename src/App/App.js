import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Context from './Context';
import Entrada from './Entrada/Entrada';
import Login from "./Login/Login";
import Register from "./Register/Register";
import Saida from './Saida/Saida';
import Wallet from './Wallet/Wallet';

export default function App(){
    const [user, setUser] = React.useState({});
    return (
        <Context.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/entrada" element={<Entrada />} />
                    <Route path="/saida" element={<Saida />} />
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    )
}