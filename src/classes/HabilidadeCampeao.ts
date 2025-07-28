import IHabilidade from "./IHabilidade";
export default class HabilidadeCampeao implements IHabilidade {
    private _id: string;
    private _nome: string;
    private _descricao: string;
    private _tooltip: string;
    private _cooldown: number[];
    private _custo: number[];
    private _alcance: number[];
    private _icone: string;
    constructor(id: string, nome: string, descricao: string, tooltip: string, cooldown: number[], custo: number[], alcance: number[], icone: string) {
        this._id = id;
        this._nome = nome;
        this._descricao = descricao;
        this._tooltip = tooltip;
        this._cooldown = cooldown;
        this._custo = custo;
        this._alcance = alcance;
        this._icone = icone;
    }
    get id(): string {
        return this._id;
    }
    get nome(): string {
        return this._nome;
    }
    get descricao(): string {
        return this._descricao;
    }
    get tooltip(): string {
        return this._tooltip;
    }
    get cooldown(): number[] {
        return this._cooldown;
    }
    get custo(): number[] {
        return this._custo;
    }
    get alcance(): number[] {
        return this._alcance;
    }
    get icone(): string {
        return this._icone;
    }
}