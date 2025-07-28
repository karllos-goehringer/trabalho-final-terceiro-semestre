import { Link } from 'react-router';
import estilo from './IconCampeao.module.css';
import Campeao from '../../classes/Campeao';
import ControladorRepositorio from '../../classes/ControladorRepositorio';
import { useEffect, useState } from 'react';
interface CampeaoProps {
    item: Campeao;
}
export default function IconCampeao({item}:CampeaoProps){
      const [patch, setPatch] = useState<string>("");
    
      useEffect(() => {
        async function fetchPatch() {
          let versao = await ControladorRepositorio.getPatch();
          setPatch(versao);
        }
        fetchPatch();
      }, ['']);
    return(
        <Link to={`/pagina-campeao/${item.id}`} className={estilo.link}>
            <div className={estilo.espaco}>
         <img src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${item.icon}.png`} alt={item.nome} className={estilo.imagem} />
         <a className={estilo.nomeChampion}>{item.nome}</a>
         </div>
        </Link>
    )

}