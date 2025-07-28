import HeaderVertical from "../../componentes/Header/Header";
import RepositorioInstanciados from "../../classes/RepositorioIntanciados";
import PaginaTabelaItens from "../lista-de-itens/lista-de-itens";
import estilo from './Pagina-campeao.module.css'
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ControladorRepositorio from "../../classes/ControladorRepositorio";
export default function PaginaCampeao() {
    const { id } = useParams();

    const [patch, setPatch] = useState<string>("");

    useEffect(() => {
        async function fetchPatch() {
            const versao = await ControladorRepositorio.getPatch();
            setPatch(versao);
        }
        fetchPatch();
    }, []);

    const campeao = RepositorioInstanciados.getCampeoes().find(
        (c) => String(c.id) === String(id)
    );
    useEffect(() => {
        if (campeao) {
            document.title = `League of Project - ${campeao.nome}`;
        } else {
            document.title = "League of Project - Campeão não encontrado";
        }
    }, [campeao]);
    if (!campeao) return <PaginaTabelaItens />;
    return (
        <body >
            <div className={estilo.cointainerPagina}>
                <div className={estilo.pagina}>
                    <HeaderVertical />
                    <div className={estilo.box}>
                        <img className={estilo.splashartimg} src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${campeao.icon}_0.jpg`} />
                        <div className={estilo.barraSplashart}>
                        </div>
                        <img className={estilo.iconSplashart} src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${campeao.icon}.png`}></img>
                        <div className={estilo.divSpells}>
                            <div className={estilo.slotHabilidade}>
                                <span className={estilo.label}>P</span>
                                <img className={estilo.iconHabilidade} src={campeao.passiva.icone} />
                                <div className={estilo.tooltip}>
                                    <h2>{campeao.passiva.nome}</h2>
                                    Descrição: {campeao.passiva.descricao}
                                </div>
                            </div>
                            <div className={estilo.slotHabilidade}>
                                <span className={estilo.label}>Q</span>
                                <img className={estilo.iconHabilidade} src={campeao.spells[0].icone} />
                                <div className={estilo.tooltip}>
                                    <h2>{campeao.spells[0].nome}</h2>
                                    Descrição: {campeao.spells[0].descricao}
                                    <br></br>
                                    Tempo de recarga: {campeao.spells[0].cooldown[0]}, {campeao.spells[0].cooldown[1]}, {campeao.spells[0].cooldown[2]}, {campeao.spells[0].cooldown[3]}, {campeao.spells[0].cooldown[4]} segundos.
                                    <br></br>
                                    Custo:  {campeao.spells[0].custo[0]} de {campeao.tipoEnergia}.
                                </div>
                            </div>
                            <div className={estilo.slotHabilidade}>
                                <span className={estilo.label}>W</span>
                                <img className={estilo.iconHabilidade} src={campeao.spells[1].icone} />
                                <div className={estilo.tooltip}>
                                    <h2>{campeao.spells[1].nome}</h2>
                                    Descrição: {campeao.spells[1].descricao}
                                    <br></br>
                                    Tempo de recarga: {campeao.spells[1].cooldown[0]}, {campeao.spells[1].cooldown[1]}, {campeao.spells[1].cooldown[2]}, {campeao.spells[1].cooldown[3]}, {campeao.spells[1].cooldown[4]} segundos.
                                    <br></br>
                                    Custo:  {campeao.spells[1].custo[0]} de {campeao.tipoEnergia}.
                                </div>
                            </div>
                            <div className={estilo.slotHabilidade}>
                                <span className={estilo.label}>E</span>
                                <img className={estilo.iconHabilidade} src={campeao.spells[2].icone} />
                                <div className={estilo.tooltip}>
                                    <h2>{campeao.spells[2].nome}</h2>
                                    Descrição: {campeao.spells[2].descricao}
                                    <br></br>
                                    Tempo de recarga: {campeao.spells[2].cooldown[0]}, {campeao.spells[2].cooldown[1]}, {campeao.spells[2].cooldown[2]}, {campeao.spells[2].cooldown[3]}, {campeao.spells[2].cooldown[4]} segundos.
                                    <br></br>
                                    Custo:  {campeao.spells[2].custo[0]} de {campeao.tipoEnergia}.
                                </div>
                            </div>
                            <div className={estilo.slotHabilidade}>
                                <span className={estilo.label}>R</span>
                                <img className={estilo.iconHabilidade} src={campeao.spells[3].icone} />
                                <div className={estilo.tooltip}>
                                    <h2>{campeao.spells[3].nome}</h2>
                                    Descrição: {campeao.spells[3].descricao}
                                    <br></br>
                                    Tempo de recarga: {campeao.spells[3].cooldown[0]}, {campeao.spells[3].cooldown[1]}, {campeao.spells[3].cooldown[2]} segundos.
                                    <br></br>
                                    Custo:  {campeao.spells[3].custo[0]} de {campeao.tipoEnergia}.
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={estilo.boxNomeDescrição}>
                                <a className={estilo.nomeCampeao}>{campeao.nome}</a>
                                <a className={estilo.subCampeao}> {campeao.titulo}</a>
                            </div>
                            <div className={estilo.atributosBase}>
                                <a> Dificuldade: {campeao.info.dificuldadeTexto}</a>
                                <a> História: </a>
                                <div className={estilo.loreCampeao}>
                                    <p>{campeao.lore}</p>
                                </div>
                                <a> Estilo de Combate: {campeao.tags.join(", ")}</a>
                                <a> Atributos Base:</a>

                                <ul className={estilo.listaAtributos}>
                                    <li>Vida: {campeao.status.vida}</li>
                                    <li>Vida por Nível: {campeao.status.vidaPorLv}</li>
                                    <li>Mana: {campeao.status.mana}</li>
                                    <li>Mana por Nível: {campeao.status.manaPorLv}</li>
                                    <li>Velocidade de Movimento: {campeao.status.velocMovimento}</li>
                                    <li>Armadura: {campeao.status.armadura}</li>
                                    <li>Armadura por Nível: {campeao.status.armaduraPorLv}</li>
                                    <li>Resistência Mágica: {campeao.status.spellblock}</li>
                                    <li>Dano de Ataque: {campeao.status.attackdamage}</li>
                                    <li>Dano de Ataque por Nível: {campeao.status.attackdamagePorLv}</li>
                                    <li>Alcance de Ataque: {campeao.status.alcanceAtck}</li>
                                    <li>Velocidade de Ataque: {campeao.status.attackspeed}</li>
                                    <li>Velocidade de por Nível: {campeao.status.attackspeedPorLv}</li>
                                    <li>Regeneração de Vida: {campeao.status.hpregen}</li>
                                    <li>Regeneração de Vida por Nível: {campeao.status.hpregenPorLv}</li>
                                    <li>Regeneração de Mana: {campeao.status.mpregen}</li>
                                    <li>Regeneração de Mana por Nível: {campeao.status.mpregenPorLv}</li>
                                    <li>Acerto Crítico: {campeao.status.crit}</li>
                                    <li>Acerto Crítico por Nível: {campeao.status.critPorLv}</li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}