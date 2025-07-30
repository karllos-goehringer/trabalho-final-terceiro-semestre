import IHabilidade from "./IHabilidade";

export default class PassivaCampeao implements IHabilidade{
  private _nome: string;
  private _descricao: string;
  private _icone: string;

  constructor(nome: string, descricao: string, icone: string) {
    this._nome = nome;
    this._descricao = descricao;
    this._icone = icone;
  }

  public get nome(): string {
    return this._nome;
  }

  public get descricao(): string {
    return this._descricao;
  }

  public get icone(): string {
    return this._icone;
  }
  public set nome(valor: string) {
    this._nome = valor;
  }
  public set descricao(valor: string) {
    this._descricao = valor;
  }
  public set icone(valor: string) {
    this._icone = valor;
  } 
  toString(): string {
    return `
    \nPassiva do Campeão:
    \n  Nome: ${this._nome},
    \n  Descrição: ${this._descricao},
    \n  Ícone: ${this._icone}`;
  }
}