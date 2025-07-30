import HabilidadeCampeao from "./HabilidadeCampeao";
import InfoCampeao from "./InfoCampeao";
import PassivaCampeao from "./PassivaCampeao";
import StatusCampeao from "./StatusCampeao";
import IPesquisavel from "./IPesquisavel";
export default class Campeao implements IPesquisavel {
  private _id: number;
  private _icon: string;
  private _nome: string;
  private _titulo: string;
  private _lore: string;
  private _tags: string[];
  private _tipoEnergia: string;
  private _info: InfoCampeao;
  private _status: StatusCampeao;
  private _spells: HabilidadeCampeao[];
  private _passiva: PassivaCampeao;
  constructor(id: number, icon: string, nome: string, titulo: string, lore: string, tags: string[], tipoEnergia: string, status: StatusCampeao, info: InfoCampeao, spells: HabilidadeCampeao[], passiva: PassivaCampeao) {
    this._id = id;
    this._icon = icon;
    this._nome = nome;
    this._titulo = titulo;
    this._lore = lore;
    this._tags = tags;
    this._tipoEnergia = tipoEnergia;
    this._status = status;
    this._info = info;
    this._spells = spells;
    this._passiva = passiva;
  }
  public get id(): number {
    return this._id;
  }
  public get icon(): string {
    return this._icon;
  }
  public get nome(): string {
    return this._nome;
  }

  public get titulo(): string {
    return this._titulo;
  }

  public get lore(): string {
    return this._lore;
  }

  public get tags(): string[] {
    return this._tags;
  }

  public get tipoEnergia(): string {
    return this._tipoEnergia;
  }

  public get info(): InfoCampeao {
    return this._info;
  }

  public get status(): StatusCampeao {
    return this._status;
  }

  public get spells(): HabilidadeCampeao[] {
    return this._spells;
  }

  public get passiva(): PassivaCampeao {
    return this._passiva;
  }
  public set id(valor: number) {
    this._id = valor;
  }

  public set nome(valor: string) {
    this._nome = valor;
  }

  public set icon(valor: string) {
    this._icon = valor;
  }

  public set titulo(valor: string) {
    this._titulo = valor;
  }

  public set lore(valor: string) {
    this._lore = valor;
  }

  public set tags(valor: string[]) {
    this._tags = valor;
  }

  public set tipoEnergia(valor: string) {
    this._tipoEnergia = valor;
  }

  public set info(valor: InfoCampeao) {
    this._info = valor;
  }

  public set status(valor: StatusCampeao) {
    this._status = valor;
  }

  public set spells(valor: HabilidadeCampeao[]) {
    this._spells = valor;
  }

  public set passiva(valor: PassivaCampeao) {
    this._passiva = valor;
  }
  pesquisaPorId(id: number): boolean {
    return this._id === id;
  }
  pesquisaPorNome(nome: string): boolean {
    return this._nome.toLowerCase().includes(nome.toLowerCase());
  }
  toString(): string{
    return `
    \nCampeão:
    \nID: ${this._id},
    \nNome: ${this._nome},
    \nTítulo: ${this._titulo},
    \nLore: ${this._lore},
    \nTags: ${this._tags.join(", ")},
    \nTipo de Energia: ${this._tipoEnergia},
    \nInfo: ${this._info.toString()},
    \nStatus: ${this._status.toString()},
    \nSpells: ${this._spells.map(spell => spell.toString()).join("\n")},
    \nPassiva: ${this._passiva.toString()}`;
  }
}