export default class Habilidade {
  protected readonly _nome: string;
  protected readonly _descricao: string;
  protected readonly _icone: string;

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
}