export default class Mapa{
    private _nome: string;
    private _id: number;

    constructor(nome: string, id: number) {
        this._nome = nome;
        this._id = id;
    }

    get nome(): string {
        return this._nome;
    }

    get id(): number {
        return this._id;
    }
    static construirMapas(mapasData: { [id: number]: boolean }): Mapa[] {
        const nomesMapas: { [id: number]: string } = {
            11: "Summoner's Rift",
            12: "Howling Abyss",
            21: "TT (Twisted Treeline)",
            22: "Crystal Scar",
            30: "Tutorial Map",
            33: "Nexus Blitz",
            35: "Arena",
        };
        const mapasConstruidos: Mapa[] = [];
        for (const idStr in mapasData) {
            const id = parseInt(idStr);
            const ativo = mapasData[id];
            if (ativo && nomesMapas[id]) {
                mapasConstruidos.push(new Mapa(nomesMapas[id], id));
            }
        }
        return mapasConstruidos;
    }
}