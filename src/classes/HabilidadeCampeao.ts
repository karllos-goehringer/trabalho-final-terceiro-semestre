import Habilidade from "./Habilidade";
export default class HabilidadeCampeao extends Habilidade {
    private readonly _id: string;
    private readonly _tooltip: string;
    private readonly _cooldown: number[];
    private readonly _custo: number[];
    private readonly _alcance: number[];

    constructor(id: string, nome: string, descricao: string, icone: string, tooltip: string, cooldown: number[], custo: number[], alcance: number[]) {
        super(nome, descricao, icone);
        this._id = id;
        this._tooltip = tooltip;
        this._cooldown = [...cooldown]; // defensivamente copiando
        this._custo = [...custo];
        this._alcance = [...alcance];
    }

    public get id(): string {
        return this._id;
    }

    public get tooltip(): string {
        return this._tooltip;
    }

    public get cooldown(): number[] {
        return [...this._cooldown]; // imutabilidade externa
    }

    public get custo(): number[] {
        return [...this._custo];
    }

    public get alcance(): number[] {
        return [...this._alcance];
    }

    public toString(): string {
        return `
                Habilidade do Campeão:
                ID: ${this._id}
                Nome: ${this.nome}
                Descrição: ${this.descricao}
                Tooltip: ${this._tooltip}
                Cooldown: ${this._cooldown.join(", ")}
                Custo: ${this._custo.join(", ")}
                Alcance: ${this._alcance.join(", ")}
                Ícone: ${this.icone}`;
    }
}