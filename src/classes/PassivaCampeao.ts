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

  get nome(): string {
    return this._nome;
  }

  get descricao(): string {
    return this._descricao;
  }

  get icone(): string {
    return this._icone;
  }
}