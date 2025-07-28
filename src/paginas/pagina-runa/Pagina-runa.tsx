import RepositorioInstanciados from "../../classes/RepositorioIntanciados";
import HeaderVertical from "../../componentes/Header/Header";
import Determinacao from '../../classes/Determinacao';
import Dominacao from '../../classes/Dominacao';
import Feiticaria from '../../classes/Feiticaria';
import Inspiracao from '../../classes/Inspiracao';
import Precisao from '../../classes/Precisao';
import estilo from './Pagina-runa.module.css'
import { useEffect } from "react";
import { useParams } from "react-router";
import RunaBox from "../../componentes/Runa/Runa";

export default function PaginaRuna() {
    const { id } = useParams();
    const runa = (
        RepositorioInstanciados.getRunas().find(runa => String(runa.id) === id)
    ) as Dominacao | Precisao | Feiticaria | Determinacao | Inspiracao;
    useEffect(() => {
        document.title = `League of Project - ${runa.nome}`;
    }, [runa]);
    return (
        <body >
            <div className={estilo.cointainerPagina}>
                <div className={estilo.pagina}>
                    <HeaderVertical />
                    <div className={estilo.box}>
                        <div className={estilo.runaBox}>
                        <RunaBox item={runa}/>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}