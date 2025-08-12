import estilo from './Header.module.css';
import Botao from '../Botao';
import { FaHome } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { RiSwordFill } from "react-icons/ri";
import { useEffect, useState } from 'react';
import ControladorRepositorio from '../../classes/ControladorRepositorio';
import { Link } from 'react-router';
import { GiStoneSphere } from "react-icons/gi";
import { IoBook } from "react-icons/io5";

export default function HeaderVertical() {
    function PatchComponente() {
        const [patch, setPatch] = useState("");
        useEffect(() => {
            async function carregarVersao() {
                const versao = await ControladorRepositorio.getPatch();
                setPatch(versao);
            } carregarVersao();
        });
        return <a>{patch}</a>;
    }
    return (
        <>
            <div className={estilo.headerbox}>
                <div className={estilo.headerbtn}>
                    <div className={estilo.logo}>
                        <img src='https://i.namu.wiki/i/IQqQjUi48MapyDFiT7DRw5SpO1Qch3nTNmTenANlyRh6WfQt66CvpadFNUi4pXCfcM7lNvyS3pVchoNzEhToNw.webp' width={'100%'}></img>
                    </div>
                    <Link to={'/'}>
                        <div className={estilo.buttonbox}>
                            <FaHome size={22} style={{ marginLeft: '16px' }} color="#fff" />
                            <a>Home</a>
                        </div>
                    </Link>
                    <Link to="/campeoes">
                        <div className={estilo.buttonbox}>
                            <HiUserGroup size={22} style={{ marginLeft: '16px' }} color="#fff" />
                            <a>Campeões</a>
                        </div>
                    </Link>
                    <Link to="/lista-de-itens">
                        <div className={estilo.buttonbox} >
                            <RiSwordFill size={22} style={{ marginLeft: '16px' }} color="#fff" />
                            <a>Itens</a>
                        </div>
                    </Link>
                    <Link to="/pagina-runa">
                        <div className={estilo.buttonbox} >
                            <GiStoneSphere size={22} style={{ marginLeft: '16px' }} color="#fff" />
                            <a>Runas</a>
                        </div>
                    </Link>
                    <Link to="/pagina-feiticos">
                        <div className={estilo.buttonbox} >
                            <IoBook size={22} style={{ marginLeft: '16px' }} color="#fff" />
                            <a>Feitiços</a>
                        </div>
                    </Link>
                </div>
                <div className={estilo.patch}>
                    <a className={estilo.boxPatch}>Patch Atual:{PatchComponente()}</a>
                </div>
            </div>
        </>
    )
}