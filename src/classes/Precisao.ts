import Runa from "./Runa";
import Runinha from "./Runinhas";
import IPesquisavel from "./IPesquisavel";
export default class Precisao implements Runa, IPesquisavel {
    public _id: number;
    public _nome: string;
    private _descricao: string;
    private _imagem: string;
    private _tipo: string;
    private _caminho: string;
    private _runas: Runinha[];
    constructor(id: number, nome: string, descricao: string, imagem: string, tipo: string, caminho: string, runas: Runinha[]) {
        this._id = id;
        this._nome = nome;
        this._descricao = descricao;
        this._imagem = imagem;
        this._tipo = tipo;
        this._caminho = caminho;
        this._runas = runas;
    }
    get id() { return this._id; }
    get nome() { return this._nome; }
    get descricao() { return this._descricao; }
    get imagem() { return this._imagem; }
    get tipo() { return this._tipo; }
    get caminho() { return this._caminho; }
    get runas() { return this._runas; }
    
    pesquisaPorNome(nome: string): boolean {
        return this._nome.toLowerCase().includes(nome.toLowerCase());
    }
    pesquisaPorId(id: number): boolean {
        return this._id === id;
    }
}