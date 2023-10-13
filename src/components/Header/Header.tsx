import { Link } from 'react-router-dom'
import { HeaderContainer } from "./styles"

export const Header = () => {
    return (
        <HeaderContainer>
            <nav>
            <div className="nav-block">
                <Link to="/">HOME</Link>
                <Link to="/">SOBRE NÓS</Link>
                <Link to="/">SERVIÇOS</Link>
            </div>
            <div className="nav-block">
                <img src="https://www.wswork.com.br/assets/img/logows.svg" alt="WS Work Logo" />
            </div>
            <div className="nav-block">
                <Link to="/">LOJA</Link>
                <Link to="/">INVENTÁRIO</Link>
                <Link to="/">CONTATO</Link>
            </div>
            </nav>
        </HeaderContainer>
    )
}