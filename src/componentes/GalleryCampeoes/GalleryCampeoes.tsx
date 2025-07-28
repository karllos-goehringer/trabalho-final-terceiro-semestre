import Campeao from "../../classes/Campeao";
import IconCampeao from "../IconCampeao/IconCampeao";
import estilo from "./GalleryCampeoes.module.css"
interface GaleryPropsCampeoes {
    itens: Campeao[];
}
export default function GalleryCampeoes({ itens }: GaleryPropsCampeoes) {

    return (
        <div className={estilo.boxListaIcones}>
            {itens.map((item) => (
                <IconCampeao item={item} />
            ))}
        </div>)
}    
