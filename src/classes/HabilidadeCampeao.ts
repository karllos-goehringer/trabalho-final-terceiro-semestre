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
    public get id(): string {
        return this._id;
    }
    public get nome(): string {
        return this._nome;
    }
    public get descricao(): string {
        return this._descricao;
    }
    public get tooltip(): string {
        return this._tooltip;
    }
    public get cooldown(): number[] {
        return this._cooldown;
    }
    public get custo(): number[] {
        return this._custo;
    }
    public get alcance(): number[] {
        return this._alcance;
    }
    public get icone(): string {
        return this._icone;
    }
    toString(): string {
        return `
        \nHabilidade do Campeão:
        \n  ID: ${this._id},
        \n  Nome: ${this._nome},
        \n  Descrição: ${this._descricao},
        \n  Tooltip: ${this._tooltip},
        \n  Cooldown: ${this._cooldown.join(", ")},
        \n  Custo: ${this._custo.join(", ")},
        \n  Alcance: ${this._alcance.join(", ")},
        \n  Ícone: ${this._icone}`;
    }
}