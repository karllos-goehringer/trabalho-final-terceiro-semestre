import { useParams } from "react-router";
import HeaderVertical from "../../componentes/Header/Header";
import PageItem from "../../componentes/PageItem/PageItem";
import RepositorioInstanciados from "../../classes/RepositorioIntanciados";
import Item from "../../classes/Item";
import PaginaTabelaItens from "../lista-de-itens/lista-de-itens";
import estilo from './Pagina-Item.module.css'
import { useEffect } from "react";
export default function PaginaItem() {
  const { id } = useParams();
  const item = (
    RepositorioInstanciados.getItensLol().find(item => String(item.id) === id) 
) as Item;

useEffect(() => {
    document.title = `League of Project - ${item.nome}`;
}, [item]);

if (!item){ return <PaginaTabelaItens />}
if (!item) {
  return <PaginaTabelaItens />;
}
  return (
    <body >
        <div className={estilo.cointainerPagina}>
                <div className={estilo.pagina}>
                    <HeaderVertical/>
                    <div className={estilo.box}>
                        <PageItem item={item} />
                    </div>
                </div>
            </div>
    </body>
  );
}