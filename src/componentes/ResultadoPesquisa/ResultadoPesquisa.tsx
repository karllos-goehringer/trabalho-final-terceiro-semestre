import { use, useEffect, useState } from 'react';
import Campeao from '../../classes/Campeao';
import ControladorRepositorio from '../../classes/ControladorRepositorio';
import Item from '../../classes/Item';
import Runa from '../../classes/Runa';
import estilo from './ResultadoPesquisa.module.css'
import { Link } from 'react-router';
interface GaleryPropsCampeoes {
    item: Campeao | Item | Runa;
}
export default function ResultadoPesquisa({item}: GaleryPropsCampeoes) {
   const [urlImagem, setUrlImagem] = useState<string>("");

    useEffect(() => {
        const renderItem = async () => {
            let requisicao: string | undefined;
            const patch = await ControladorRepositorio.getPatch();

            if (item instanceof Campeao) {
                requisicao = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${item.icon}.png`;
            } else if (item instanceof Item) {
                requisicao = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/item/${item.imagem}`;
            }

            if (requisicao) setUrlImagem(requisicao);
        };

        renderItem();
    }, [item]);

    return (
        <Link to={`/pagina-${item instanceof Campeao ? 'campeao' : item instanceof Item ? 'item' : 'runa'}/${item.id}`} className={estilo.linkResultado}>
           <div className={estilo.boxResultado}>
                <img src={urlImagem} alt={item.nome} className={estilo.imagemResultado} />
                <a className={estilo.nomeResultado}>{item.nome}</a>
           </div>
        </Link>   


    );
}