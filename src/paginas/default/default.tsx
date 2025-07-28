import { Link } from "react-router";
import HeaderVertical from "../../componentes/Header/Header";
import estilo from './Default.module.css';
import { useEffect } from "react";
export default function DefaultPage(){
    useEffect(() => {
        document.title = "League of Project - 404";})
    return (
        <>
        <body className={estilo.body}>
            <div className={estilo.pagina}>
                <HeaderVertical />
                <div className={estilo.box}>
                    <h1 className={estilo.titulo}>404 Página não encontrada</h1>
                    <h1 className={estilo.titulo}>Está perdido? <br></br><Link to='/' className={estilo.link}>Volte por aqui</Link></h1>
                    <img src="/pngwing.com-removebg-preview.png" alt="page not found"/>
                    <text>"O Yeti conhece o caminho" - Nunu</text>
                </div>
            </div>
        </body>
        </>
    );
}