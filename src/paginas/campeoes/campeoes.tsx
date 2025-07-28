import { useEffect, useState } from "react";
import GalleryCampeoes from "../../componentes/GalleryCampeoes/GalleryCampeoes"
import HeaderVertical from "../../componentes/Header/Header"
import estilo from "./campeoes.module.css"
import RepositorioInstanciados from "../../classes/RepositorioIntanciados";
import Campeao from "../../classes/Campeao";

export default function PaginaCampeoes() {
const [itens, setItens] = useState<Campeao[]>([]);

    useEffect(() => {
        document.title = "League of Project - Campeões";
        async function getCampeoes() {
            const campeoes = await RepositorioInstanciados.getCampeoes();
            setItens(campeoes);
        }

        getCampeoes();
    }, []);
    return(
        <body >
        <div className={estilo.cointainerPagina}>
                <div className={estilo.pagina}>
                    <HeaderVertical/>
                    <div className={estilo.box}>
                        <GalleryCampeoes itens={itens}/>
                    </div>
                </div>
            </div>
    </body>
    )

}