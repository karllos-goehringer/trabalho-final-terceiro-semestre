import estilo from './Pagina-feitico-solo.module.css'
import { useEffect } from "react";
import { useParams } from "react-router";
import RepositorioInstanciados from "../../classes/RepositorioIntanciados";
import Feitico from "../../classes/Feitico";
import HeaderVertical from '../../componentes/Header/Header';
import FeiticoComponente from '../../componentes/Feitico/Feitico';

export default function PaginaFeitico() {
    const { id } = useParams();
    const spell = (
        RepositorioInstanciados.getFeiticos().find(spell => String(spell.id) === id)
    ) as Feitico;
    useEffect(() => {
        document.title = `League of Project - ${spell.nome}`;
    }, [spell]);
    return (
        <body >
            <div className={estilo.cointainerPagina}>
                <div className={estilo.pagina}>
                    <HeaderVertical />
                    <div className={estilo.box}>
                        <div className={estilo.spellBox}>
                        <FeiticoComponente feitico={spell}/>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}