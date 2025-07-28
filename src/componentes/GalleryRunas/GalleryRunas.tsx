
import RepositorioInstanciados from "../../classes/RepositorioIntanciados";
import estilo from './GalleryRunas.module.css';
import RunaBox from "../Runa/Runa";
import Dominacao from "../../classes/Dominacao";
import Precisao from "../../classes/Precisao";
import Feiticaria from "../../classes/Feiticaria";
import Determinacao from "../../classes/Determinacao";
import Inspiracao from "../../classes/Inspiracao";
export default function GalleryRunas() {
    const runas = RepositorioInstanciados.getRunas().map((item) => {
                    if (item instanceof Dominacao || item instanceof Precisao || item instanceof Feiticaria || item instanceof Determinacao || item instanceof Inspiracao) {
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