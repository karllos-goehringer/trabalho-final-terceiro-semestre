import imagemFeitico from "./imagemFeitico";
import IPesquisavel from "./IPesquisavel";
export default class Feitico implements IPesquisavel {
    private _nome: string;
    private _id: number;
    private _imagem: imagemFeitico;
    private _custo: string;
    private _descricao: string;
    private _tooltip: string;
    constructor(nome: string, id: number, imagem: imagemFeitico, custo: string, descricao: string, tooltip: string) {
        this._nome = nome;
        this._id = id;
        this._imagem = imagem;
        this._custo = custo;
        this._descricao = descricao;
        this._tooltip = tooltip;
    }
    public get nome(): string {
        return this._nome;
    }

    public get id(): number {
        return this._id;
    }

    public get imagem(): imagemFeitico {
        return this._imagem;
    }

    public get custo(): string {
        return this._custo;
    }

    public get descricao(): string {
        return this._descricao;
    }

    public get tooltip(): string {
        return this._tooltip;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public set id(value: number) {
        this._id = value;
    }

    public set imagem(value: imagemFeitico) {
        this._imagem = value;
    }

    public set custo(value: string) {
        this._custo = value;
    }

    public set descricao(value: string) {
        this._descricao = value;
    }

    public set tooltip(value: string) {
        this._tooltip = value;
    }
    pesquisaPorId(id: number): boolean {
        return this._id === id;
    }
    pesquisaPorNome(nome: string): boolean {
       return this._nome.toLowerCase().includes(nome.toLowerCase());  
    }
}