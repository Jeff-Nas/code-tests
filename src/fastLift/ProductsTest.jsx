import { useState, useEffect } from "react";


export function ProductsTest() {
    const [inputName, setInputName] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const savedName = localStorage.getItem('name');
        if (savedName) {
            setUserName(savedName);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('name', userName);
    }, [userName]);

    function HandleSaveName() {
        if (inputName.trim() === "") return;
        setUserName(inputName);
        setInputName("")
    }

    return (
        <div>
            <div className="flex gap-3 mb-3">
                <input
                    type="text"
                    name="userName"
                    value={inputName}
                    placeholder="Digite seu nome"
                    className="border p-1.5 rounded "
                    onChange={(e) => setInputName(e.target.value)}
                />

                <button
                    className="p-1.5 bg-purple-600 text-white rounded"
                    onClick={HandleSaveName}
                >
                    Adicionar usuário
                </button>
            </div>
            {userName && <p className="text-xl">Bem vindo, <span className="text-purple-500 font-semibold">{userName}!</span></p>}
        </div>
    )
}
//o botão é clicado
//a função é chamda
//o valor digitado é armazenado na variável de estado
//useEffect atualiza a localStorage 
//o nome inserido é exibido na tela 

//como armazenar o valor do input?
//acresccento mais um state? 