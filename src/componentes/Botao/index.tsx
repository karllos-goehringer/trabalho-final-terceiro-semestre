import { Link } from 'react-router-dom';
import estilo from './Botao.module.css';
import { JSX } from 'react';


interface BotaoProps {
    goto: string;
    descricao: string;
    login?: boolean;
    icon?: JSX.Element;
}

function Botao({ goto, descricao, login = false, icon: Element }: BotaoProps) {
    if (window.location.pathname === goto) {
        login = true
    }
    return (
        <Link to={`${goto}`} className={estilo.link}>
            {Element}
            {descricao}
        </Link>
    )
}

export default Botao