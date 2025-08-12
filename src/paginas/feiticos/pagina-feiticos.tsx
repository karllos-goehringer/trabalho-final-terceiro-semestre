import Feitico from "../../classes/Feitico";
import RepositorioInstanciados from "../../classes/RepositorioIntanciados";
import GalleryFeiticos from "../../componentes/GalleryFeiticos/GalleryFeiticos";
import HeaderVertical from "../../componentes/Header/Header";
import estilo from "./pagina-feiticos.module.css";
export default function PaginaFeiticos(){
    let vetFeiticos:Feitico[] = RepositorioInstanciados.getFeiticos();
    return(
    <>
        <body className={estilo.body}>
            <div className={estilo.pagina}>
                <HeaderVertical />
                <div className={estilo.box}>
                    <GalleryFeiticos feiticos={vetFeiticos}/>
                </div>
            </div>
        </body>
    </>
    )
}