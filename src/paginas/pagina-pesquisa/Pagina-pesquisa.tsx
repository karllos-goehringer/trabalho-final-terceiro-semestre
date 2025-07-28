import { Link, useParams } from "react-router";
import HeaderVertical from "../../componentes/Header/Header";
import estilo from "./Pagina-pesquisa.module.css";
import DefaultPage from "../default/default";
import { JSX, useEffect, useState } from "react";
import RepositorioInstanciados from "../../classes/RepositorioIntanciados";
import ResultadoPesquisa from "../../componentes/ResultadoPesquisa/ResultadoPesquisa";
export default function PaginaPesquisa() {
    const [busca, setarBusca] = useState("");
    const [conteudoEncontrado, setConteudoEncontrado] = useState<JSX.Element | JSX.Element[] | null>(null);
    const { id } = useParams<{ id?: string }>();
    useEffect(() => {
        const resultadosDaBusca = performSearch(id);
        setConteudoEncontrado(resultadosDaBusca); 
        document.title = `League of Project - Pesquisa: ${id || 'N/A'}`;
    }, [id]); 
    function performSearch(parametro: string | undefined): JSX.Element | JSX.Element[] {
        let itens = RepositorioInstanciados.getItensLol();
        let campeoes = RepositorioInstanciados.getCampeoes();
        let runas = RepositorioInstanciados.getRunas();
        let vetResultados: JSX.Element[] = [];
        console.log(runas)
        if (!parametro) {
            return <DefaultPage />; 
        }
        itens.forEach((item) => {
            if (item.pesquisaPorNome(parametro)) {
                vetResultados.push(<ResultadoPesquisa item={item} />);
            }
        });
        campeoes.forEach((campeao) => {
            if (campeao.pesquisaPorNome(parametro)) {
                vetResultados.push(<ResultadoPesquisa item={campeao} />);
            }
        });
        runas.forEach((runa) => {
            if (runa.pesquisaPorNome(parametro)) {
                vetResultados.push(<ResultadoPesquisa item={runa} />);
                console.log(runa);
            }
        });
        if (vetResultados.length === 0 ) {
            return <a>Nenhum resultado encontrado para "{parametro}".</a>;
        }
        return vetResultados;
    }
  document.querySelector("#input")?.addEventListener("keydown", (event) => {
    const keyboardEvent = event as KeyboardEvent;

    if (keyboardEvent.key === "Enter" && busca.trim() !== "") {
        event.preventDefault();
        const resultadosDaBusca = performSearch(busca);
        setConteudoEncontrado(resultadosDaBusca);
    }})

    return (
        <div className={estilo.pagina}>
            <HeaderVertical />
            <div className={estilo.box}>
                <img className={estilo.splashartimg} src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg" alt="Darius Splashart" />
                <div className={estilo.searchBarBox}>
                    <div className={estilo.searchBar}>
                        <form className={estilo.formSearch} onSubmit={(e) => {
                            e.preventDefault();
                        }}>
                            <input id="input" type="text" placeholder="Pesquisar Campeão, Item ou Runa" className={estilo.inputSearch} onChange={(input) => setarBusca(input.target.value)} />
                            <Link to={`/pagina-pesquisa/${busca}`} className={estilo.buttonSearch}>Pesquisar</Link>
                        </form>
                    </div>
                </div>
                <div className={estilo.boxResultados}>
                    <a className={estilo.texto}> Resultados:</a>
                        {conteudoEncontrado}
                        </div>
            </div>
        </div>
               
    )
}