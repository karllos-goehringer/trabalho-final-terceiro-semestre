import { useEffect, useState } from 'react';
import ControladorRepositorio from '../../classes/ControladorRepositorio';
import Feitico from '../../classes/Feitico';
import estilo from './Feitico.module.css';
interface FeiticoComponenteProps {
    feitico: Feitico;
}
export default function FeiticoComponente({ feitico }: FeiticoComponenteProps) {
    const [patch, setPatch] = useState<string>("");

    useEffect(() => {
        async function fetchPatch() {
            let versao = await ControladorRepositorio.getPatch();
            setPatch(versao);
        }
        fetchPatch();
    }, ['']);

    return (
        <>
            <div className={estilo.boxFeitico}>
                <img src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/spell/${feitico.imagem.full}`} />
                <a>{feitico.nome}</a>

                <div className={estilo.tooltip}>
                    <h2>{feitico.tooltip}</h2>
                </div>
            </div>
        </>
    )
}