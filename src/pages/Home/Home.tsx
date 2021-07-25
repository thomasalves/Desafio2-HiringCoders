import { useEffect, useState } from 'react';
import { Cards } from '../../components/cards/Cards';
import { Menu } from '../../components/header/Menu';
import './Home.css';
import axios from 'axios';
import { Footer } from '../../components/Footer/Footer';


function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get(`https://my-json-server.typicode.com/thomasalves/backend_Desafio_2/Produtos`)
      .then( res => {
        setData(res.data)
      })
    }, [data , setData])


  return (
    <div className="App">
      <Menu></Menu>
      <div className="body">
        { data.map((i:any) =>{
          return(
              <Cards key={i.id} foto={i.photo} preco={i.preco} descricao={i.descricao}></Cards>
          )
          })}            
      </div>  
      <Footer></Footer>
    </div>
  );
}
export default Home;
