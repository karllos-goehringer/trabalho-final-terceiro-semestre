import estilo from './GalleryItens.module.css';
import Item from '../../classes/Item';
import IconItem from '../IconItem/IconItem';
interface GaleryProps {
    itens: Item[];
}
export default function GalleryItens({ itens }: GaleryProps) {

    return (
        <div className={estilo.boxListaIcones}>
            {itens.map((item) => (
                <IconItem item={item}></IconItem>
            ))}
        </div>)
}    
