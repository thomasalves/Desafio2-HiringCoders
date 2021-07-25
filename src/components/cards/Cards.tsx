import './Cards.css';
import React from 'react';

interface Props {
    preco: string,
    descricao: string,
    foto: string
}
function getProduto(_descricao: string, _preco: string) {
    console.log(_descricao, _preco)
    var produtos = {
        _descricao,
        _preco,
    }
    localStorage.setItem('Produtos', JSON.stringify(produtos));
    
  }

export function Cards(props:Props)  {   
    return(
        <div className="cardContainer">
                <div id="cards" className="cards">
                        <img src={props.foto} alt="Foto" />
                    <div className="card-info">
                        <div className="descricao"> {props.descricao} </div>
                        <div className="preco">Preço: {props.preco}</div>
                        <button className="adicionar" onClick={() => getProduto(props.descricao, props.preco, )}>Adicionar ao carrinho</button>
                    </div>
                </div>
        </div>
    )
}


