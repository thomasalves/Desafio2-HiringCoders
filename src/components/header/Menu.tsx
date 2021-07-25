import { Link } from 'react-router-dom'
import './Menu.css'


export function Menu () {
    return(
        <div className="menu">
            <div>
              <Link to="/cadastro" className="cadastrar">Criar conta</Link>
              <Link to="/login" className="entrar">Entrar</Link>
            </div>
        </div>
    )
}