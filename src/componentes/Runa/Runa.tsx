import Determinacao from '../../classes/Determinacao';
import Dominacao from '../../classes/Dominacao';
import Feiticaria from '../../classes/Feiticaria';
import Inspiracao from '../../classes/Inspiracao';
import Precisao from '../../classes/Precisao';
import estilo from './Runa.module.css';
export interface RunaProps {
    item: Dominacao | Precisao | Feiticaria | Determinacao | Inspiracao;
}
export default function RunaBox(item: RunaProps) {
    return (
        <div className={estilo.mainBox}>
            <div className={estilo.colunaPrincipal}>
                <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/${item.item.imagem}`}
                alt={item.item.nome}
                className={estilo.imagem}
            />
                <h3 className={estilo.titulo}>{item.item.nome}</h3>

                <div className={estilo.linhaRunaGrande}>
                    {item.item.runas.slice(0, 3).map((runa, index) => (
                        <div key={index} className={estilo.runaItemGrande}>
                            <img
                                src={`https://ddragon.leagueoflegends.com/cdn/img/${runa.icon}`}
                                alt={runa.shortDesc}
                                className={estilo.imgRunaGrande}
                            />
                             <div className={estilo.tooltip}>
                                    <h1>{runa.name}</h1>
                                    <br></br>
                                    <a>{runa.longDesc}</a>
                                </div>
                        </div>
                    ))}
                </div>
                {[1, 2, 3].map((grupo, i) => (
                    <div key={i} className={estilo.linhaRuna}>
                        {item.item.runas.slice(3 + i * 3, 6 + i * 3).map((runa, index) => (
                            <div key={index} className={estilo.runaItem}>
                                <img
                                    src={`https://ddragon.leagueoflegends.com/cdn/img/${runa.icon}`}
                                    alt={runa.shortDesc}
                                    className={estilo.imgRuna}
                                />
                                <div className={estilo.tooltip}>
                                    <h1>{runa.name}</h1>
                                    <br></br>
                                    <a>{runa.longDesc}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}