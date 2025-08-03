
import RepositorioInstanciados from "../../classes/RepositorioIntanciados";
import estilo from './GalleryRunas.module.css';
import RunaBox from "../Runa/Runa";
import Runa from "../../classes/Runa"
export default function GalleryRunas() {
    const runas = RepositorioInstanciados.getRunas().map((item) => {
                    if (item instanceof Runa) {
                        return <RunaBox item={item} />;
                    }
                    return null;
                })
    return (
        <div className={estilo.galleryRunas}>
            <div className={estilo.runasContainer}>
                {runas}
            </div>
        </div>
    );
}