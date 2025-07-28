/*import React from 'react';
import styles from './ListaItens.module.css';
import Item from '../../classes/Item';

interface TabelaItensProps {
  itens: Item[];
}
//não mais utilizado por questão estetica 
export default function ListaItens({ itens }: TabelaItensProps) {
  return (
      <div className={styles.tabelaWrapper}>
  <table className={styles.tabela}>
    <thead>
      <tr>
        <th>Imagem</th>
        <th>Nome</th>
        <th>Preço Total</th>
        <th>Tags</th>
        <th>Mapa</th>
      </tr>
    </thead>
    <tbody>
      {itens.map((item) => (
        <tr key={item.nome}>
          <td>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/15.14.1/img/item/${item.imagem}`}
              alt={item.nome}
              className={styles.imagem}
            />
          </td>
          <td>{item.nome}</td>
          <td>{item.precoTotalItem}</td>
          <td>{item.description}</td>
          
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
};*/