import { Link } from 'react-router';
import Item from '../../classes/Item';
import estilo from './IconItem.module.css';
import ControladorRepositorio from '../../classes/ControladorRepositorio';
import { useEffect, useState } from 'react';

interface ItemProps {
    item: Item;
}

export default function IconItem({ item }: ItemProps) {
    const [patch, setPatch] = useState<string>("");

    useEffect(() => {
        async function fetchPatch() {
            const versao = await ControladorRepositorio.getPatch();
            setPatch(versao);
        }
        fetchPatch();
    }, []);
    
    return (
        <div className={estilo.wrapperImagem}>
            <Link to={`/pagina-item/${item.id}`}>
                <img
                    src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/item/${item.imagem}`}
                    alt={item.nome}
                    className={estilo.imagem}
                />
            </Link>
            <div className={estilo.tooltip}>
                <h2>{item.nome}</h2>
            </div>
        </div>
    )

}