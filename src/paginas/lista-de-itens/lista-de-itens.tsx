import Item from "../../classes/Item";
import { useEffect, useState } from 'react';
import estilo from './Lista-de-Itens.module.css';
import HeaderVertical from "../../componentes/Header/Header";
import GalleryItens from "../../componentes/GalleryItens/GalleryItens";
import RepositorioInstanciados from "../../classes/RepositorioIntanciados";
import ControladorRepositorio from "../../classes/ControladorRepositorio";
export default function PaginaTabelaItens() {
  
 const [mapa, setMapa] = useState<'SRift' | 'Aram' | 'Arena'>('SRift');
  const [itens, setItens] = useState<Item[]>([]);
  useEffect(() => {
    document.title = "League of Project - Itens";
    const itensSelecionados = (() => {
      switch (mapa) {
        case 'SRift': return RepositorioInstanciados.getItensSRift();
        case 'Aram': return RepositorioInstanciados.getItensAram();
        case 'Arena': return RepositorioInstanciados.getItensArena();
      }
    })();
    setItens(itensSelecionados);
  }, [mapa]);
  return (
    <body>
      <div className={estilo.containerPagina}>
          <div className={estilo.pagina}>
              <HeaderVertical />
              <div className={estilo.box}>

                <div className={estilo.topheader}>
                  <img src="https://i.namu.wiki/i/KyNBQgy7tO81X_JTrBQAeWjb2HvhyZ9WiJf8pTAcQH2RZLMFgWEc1PXcPrdswNoHILQUiNzsdhQh6wX0Ba7KLg.webp" width={'50px'} onClick={() => {setMapa('SRift')}}></img>
                  <img src="https://i.namu.wiki/i/s3ZbYxmu6AH-8UxGu1nWlZGP-mas9uGXDkav-BBLc5QxiUwfCZiRQ-ABRgnU33J5exDDsoHvpQthPgGwx8OM0Q.webp" width={'50px'} onClick={() => {setMapa('Aram')}}></img>
                  <img src="https://i.namu.wiki/i/DaYen0OefYpKK2JcacdgnE2bTjiGFWqbDs7vtPwHgTqDAubbRqw8MZQVjrhyqgUgN6d_o3WWsS751vkyXJhMbw.webp" width={'50px'}onClick={() => {setMapa('Arena')}}></img>
                </div>
                
              <GalleryItens itens={itens} />
              </div>
      </div>
      </div>
    </body>
  );
}
