import HabilidadeCampeao from "./HabilidadeCampeao";
import InfoCampeao from "./InfoCampeao";
import PassivaCampeao from "./PassivaCampeao";
import StatusCampeao from "./StatusCampeao";
import IPesquisavel from "./IPesquisavel";
export default class Campeao implements IPesquisavel {
    public  _id:number;
    private _icon:string;
    public  _nome:string;
    private _titulo:string;
    private _lore:string;
    private _tags:string[];
    private _tipoEnergia:string;
    private _info:InfoCampeao;
    private _status:StatusCampeao;
    private _spells:HabilidadeCampeao[];
    private _passiva:PassivaCampeao;
    constructor(id:number,icon:string, nome:string,titulo:string,lore:string,tags:string[],tipoEnergia:string,status:StatusCampeao,info:InfoCampeao,spells:HabilidadeCampeao[],passiva:PassivaCampeao){
        this._id =  id;
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
  get id(): number {
    return this._id;
  }
  get icon():string{
    return this._icon;
  }
  get nome(): string {
    return this._nome;
  }

  get titulo(): string {
    return this._titulo;
  }

  get lore(): string {
    return this._lore;
  }

  get tags(): string[] {
    return this._tags;
  }

  get tipoEnergia(): string {
    return this._tipoEnergia;
  }

  get info(): InfoCampeao {
    return this._info;
  }

  get status(): StatusCampeao {
    return this._status;
  }

  get spells(): HabilidadeCampeao[] {
    return this._spells;
  }

  get passiva(): PassivaCampeao {
    return this._passiva;
  }
  pesquisaPorId(id: number): boolean {
    return this._id === id;
  }
  pesquisaPorNome(nome: string): boolean {
    return this._nome.toLowerCase().includes(nome.toLowerCase());
  }
}