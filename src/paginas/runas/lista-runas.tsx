import GalleryRunas from "../../componentes/GalleryRunas/GalleryRunas";
import HeaderVertical from "../../componentes/Header/Header";
import estilo from "./Lista-runas.module.css";
export default function ListaRunas(){
    return (
        <body >
            <div className={estilo.cointainerPagina}>
                <div className={estilo.pagina}>
                    <HeaderVertical />
                    <div className={estilo.box}>
                        <div className={estilo.runaBox}>
                        <GalleryRunas/>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}