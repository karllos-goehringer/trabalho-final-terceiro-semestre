import { Link, useNavigate } from "react-router";
import HeaderVertical from "../../componentes/Header/Header";
import estilo from './Index.module.css';
import { useEffect, useState } from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaDownload, FaProjectDiagram } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
export default function Home() {
    const [busca, setarBusca] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "League of Project - Home";
    })
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (busca.trim() !== "") {
            navigate(`/pagina-pesquisa/${busca}`);
        }
    }
    return (
        <>
            <div className={estilo.pagina}>
                <HeaderVertical />
                <div className={estilo.box}>
                    <img className={estilo.splashartimg} src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg" alt="Darius Splashart" />
                    <div className={estilo.searchBarBox}>
                        <div className={estilo.searchBar}>
                            <form className={estilo.formSearch} onSubmit={handleSubmit}>
                                <input id="input" type="text" placeholder="Pesquisar Campeão, Item ou Runa" className={estilo.inputSearch} onChange={(input) => setarBusca(input.target.value)} />
                                <Link to={`/pagina-pesquisa/${busca}`} className={estilo.buttonSearch}>Pesquisar</Link>
                            </form>
                        </div>
                    </div>
                    <div className={estilo.boxTitulo}>
                        <div>
                            <h1 className={estilo.titulo}>Bem vindo ! </h1>

                        </div>

                        <img className={estilo.pinguEmote} src="https://wiki.leagueoflegends.com/en-us/images/thumb/M%27Pengu_Emote.png/120px-M%27Pengu_Emote.png?bd69e&20181207233503" />
                    </div>
                    <div className={estilo.apresentacao}>
                        <a className={estilo.textoCentral}>Este projeto foi desenvolvido como Projeto final das matérias de Front-End II, POO II e Arquitetura de Software.</a>
                        <div className={estilo.linkExterior}>
                            <a>Arquivos do Projeto:</a>
                            <a className={estilo.diagrama}><FaProjectDiagram />   Diagrama de classes do Sistema:   <Link to="https://drive.google.com/file/d/1fukWlZoxksHUiSuvs8Q9sayPNzKwWAc8/view?usp=sharing"  className={estilo.nnnn} title="Download Diagrama">
                                <text>Diagrama</text>
                            </Link></a>
                            <a className={estilo.projeto}><FaGithub />   Repositório do Projeto: <Link to='https://github.com/karllos-goehringer/trabalho-final-terceiro-semestre'><text>Repositório GitHub</text></Link></a>
                            <a className={estilo.vercel}><IoLogoVercel />   Vercel: <Link to='https://trabalho-final-terceiro-semestre-zd.vercel.app/'><text>Página no Vercel</text></Link></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}