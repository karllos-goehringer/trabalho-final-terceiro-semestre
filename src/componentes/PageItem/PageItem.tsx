import { useParams } from "react-router";
import Item from "../../classes/Item"
import estilo from "./PageItem.module.css"
import Mapa from "../../classes/Mapa"
interface PageItemProps {
  item: Item;
}
export default function PageItem({ item }: PageItemProps) {
let tagsFormatadas = '';
item.tags.forEach((tag: string, index: number) => {
    if (index === item.tags.length - 1) {
        tagsFormatadas += `${tag}.`;
    } else {
        tagsFormatadas += `${tag}, `;
    }
});
    return(
            <>
              <div className={estilo.mainBox}>
                <img
              src={`https://ddragon.leagueoflegends.com/cdn/15.14.1/img/item/${item.imagem}`}
              alt={item.nome}
              className={estilo.imagem}
            />
                <a className={estilo.nomeItem}>{item.nome}</a>
                <a className={estilo.custo}>Custo: {item.precoTotalItem} de ouro</a>
              </div>
              <div className={estilo.boxDescricao}>
                <a className={estilo.descricaoItem}>{item.description}</a>
                <div className={estilo.custos}>
                <a>Custo de Total: {item.precoTotalItem}</a>
                <a>Custo para Compra: {item.precoBaseItem}</a>
                <a>Preço de Venda: {item.precoVendaItem}</a>
                <a>Tags: {tagsFormatadas}</a>
                <a>Mapa: {item.mapa.map((mapa: Mapa) => mapa.nome).join(', ') + '.'}</a>
                </div>
              
              </div>
            </>)
}