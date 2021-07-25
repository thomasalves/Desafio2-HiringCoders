import { useState } from 'react';
import InputMask from 'react-input-mask';
import './Cadastro.css'

export function Cadastro () {

    const [name , setName ] = useState('');
    const [CPF, setCPF] = useState('');
    const [email, setEmail] = useState('');

    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState('');
    
    function criarUsuario() {
        var dados = {
            name,
            CPF,
            email,
            rua,
            bairro,
            numero
        }
        localStorage.setItem('Dados', JSON.stringify(dados));

        
    }


    return(
        <div className="pageCadastro">
            <div className="cadastro">
                <h3>Novo Cadastro:</h3>
                <input type="text" name="nome"  id="nome" placeholder="Nome Completo" value={name} onChange={(e) => setName(e.target.value)} />
                <InputMask mask="999.999.999-99" placeholder="CPF" id="cpf" value={CPF} onChange={(e) => setCPF(e.target.value)}></InputMask>  
                <input  type="email" name="email" id="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" name="rua" id="rua" placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)}/>
                <input type="text" name="bairro" id="bairro" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                <input type="number" name="numero" id="numero" placeholder="Nº"  value={numero} onChange={(e) => setNumero(e.target.value)}/>
        
                <button className="btnEnviar" onClick={() => criarUsuario()}>Enviar</button>
            </div>
        </div>
    )
}