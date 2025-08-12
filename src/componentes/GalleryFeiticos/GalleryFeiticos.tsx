import Feitico from '../../classes/Feitico';
import FeiticoComponente from '../Feitico/Feitico';
import estilo from './GalleryFeiticos.module.css';
interface GalleryFeiticosProps {
    feiticos: Feitico[];
}

export default function GalleryFeiticos({ feiticos }: GalleryFeiticosProps) {
    return (
        <>
        <div className={estilo.GalleryFeiticos}>
            {feiticos.map((spell: Feitico) => (
                <FeiticoComponente feitico={spell} />
            ))}
        </div>
        
        </>
    );
}