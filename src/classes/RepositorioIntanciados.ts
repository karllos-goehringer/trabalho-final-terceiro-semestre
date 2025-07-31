import Campeao from "./Campeao"
import Item from "./Item"
import Mapa from "./Mapa"
import Runa from "./Runa";
export default class RepositorioInstanciados {
    private static vetItensLol: Item[] = [];
    private static vetCampeoes: Campeao[] = [];
    private static vetRunas: Runa[] = [];
    private static vetMapa: Mapa[] = [];
    static addVetLol(item: Item) {
        RepositorioInstanciados.vetItensLol.push(item);
    }
    static addVetMapa(mapa: Mapa) {
        RepositorioInstanciados.vetMapa.push(mapa)
    }
    static addVetCampeao(campeao: Campeao) {

        const jaExiste = RepositorioInstanciados.vetCampeoes.some(
            (c) => c.id === campeao.id
        );

        if (!jaExiste) {
            RepositorioInstanciados.vetCampeoes.push(campeao);
        }
    }
    static addVetRuna(runa: Runa) {
         const jaExiste = RepositorioInstanciados.vetRunas.some(
            (r) => r.id === runa.id
        );
        if (!jaExiste) {
            RepositorioInstanciados.vetRunas.push(runa);
        }
    }
    static getRunas(): Runa[] {
        return [...this.vetRunas];
    }
    static getItensSRift(): Item[] {
        var vetItensSRift: Item[] = [];
        for (let i = 0; i < RepositorioInstanciados.vetItensLol.length; i++) {
            const item = RepositorioInstanciados.vetItensLol[i];
            if (item.mapa.some(mapa => mapa.id === 11)) {
                vetItensSRift.push(item)
            }
        }
        return vetItensSRift;
    }
    static getItensAram(): Item[] {
        var vetItensAram: Item[] = [];
        for (let i = 0; i < RepositorioInstanciados.vetItensLol.length; i++) {
            const item = RepositorioInstanciados.vetItensLol[i];
            if (item.mapa.some(mapa => mapa.id === 12)) {
                vetItensAram.push(item)
            }
        }
        return vetItensAram;
    }
    static getItensArena(): Item[] {
        var vetItensArena: Item[] = [];
        for (let i = 0; i < RepositorioInstanciados.vetItensLol.length; i++) {
            const item = RepositorioInstanciados.vetItensLol[i];
            if (item.mapa.some(mapa => mapa.id === 30)) {
                vetItensArena.push(item)
            }
        }
        return vetItensArena;
    }
    static getCampeoes(): Campeao[] {
        return [...this.vetCampeoes]
    }
    static getItensLol(): Item[] {
        return [...RepositorioInstanciados.vetItensLol];
    }
    static deleteItemLol(id: number): void {
        RepositorioInstanciados.vetItensLol = RepositorioInstanciados.vetItensLol.filter(item => item.id !== id);
    }
    static deleteCampeao(id: number): void {
        RepositorioInstanciados.vetCampeoes = RepositorioInstanciados.vetCampeoes.filter(campeao => campeao.id !== id);
    }
    static deleteRuna(id: number): void {
        RepositorioInstanciados.vetRunas = RepositorioInstanciados.vetRunas.filter(runa => runa.id !== id);
    }
    static deleteMapa(id: number): void {
        RepositorioInstanciados.vetMapa = RepositorioInstanciados.vetMapa.filter(mapa => mapa.id !== id);
    }
}