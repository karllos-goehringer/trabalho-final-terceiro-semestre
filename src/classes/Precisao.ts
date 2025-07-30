import Runa from "./Runa";
import Runinha from "./Runinhas";
import IPesquisavel from "./IPesquisavel";
export default class Precisao implements Runa, IPesquisavel {
    private _id: number;
    private _nome: string;
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
    public get id() {
         return this._id; 
        }
    public get nome() {
         return this._nome; 
        }
    public get descricao() {
         return this._descricao; 
        }
    public get imagem() {
         return this._imagem; 
        }
    public get tipo() {
         return this._tipo; 
        }
    public get caminho() {
         return this._caminho; 
        }
    public get runas() {
         return this._runas; 
        }
     public set descricao(valor: string) {
        this._descricao = valor;
    }
  public set imagem(valor: string) {
        this._imagem = valor;
    }
   public set tipo(valor: string) {
        this._tipo = valor;
    }
   public set caminho(valor: string) {
        this._caminho = valor;
    }
    public set runas(valor: Runinha[]) {
        this._runas = valor;
    }
    pesquisaPorNome(nome: string): boolean {
        return this._nome.toLowerCase().includes(nome.toLowerCase());
    }
    pesquisaPorId(id: number): boolean {
        return this._id === id;
    }
    tostring(): string {
        return `
        \nPrecisão:
        \nRuna: ${this._nome},
        \nID: ${this._id},
        \nDescrição: ${this._descricao},
        \nImagem: ${this._imagem},
        \nTipo: ${this._tipo},
        \nCaminho: ${this._caminho},
        \nRunas: ${this._runas.map(runa => runa.nome).join(', ')}`;
    }
}