export default class InfoCampeao {
    private _ataque: number;
    private _defesa: number;
    private _magica: number;
    private _dificuldade: number;
    constructor(ataque: number, defesa: number, magica: number, dificuldade: number) {
        this._ataque = ataque;
        this._defesa = defesa;
        this._magica = magica;
        this._dificuldade = dificuldade;
    }
    get ataque(): number { return this._ataque; }
    get defesa(): number { return this._defesa; }
    get magica(): number { return this._magica; }
    get dificuldadeTexto(): string {
  if (this._dificuldade <= 3) return "Fácil";
  if (this._dificuldade <= 6) return "Média";
  return "Alta";}
    public get dificuldade(): number { 
      return this._dificuldade; 
    }
    public set ataque(valor: number) { 
      this._ataque = valor; 
    }
    public set defesa(valor: number) { 
      this._defesa = valor; 
    }
    public set magica(valor: number) { 
      this._magica = valor; 
    }
    public set dificuldade(valor: number) { this._dificuldade = valor; }
    tostring(): string {
        return `
        \nAtaque: ${this._ataque},
        \nDefesa: ${this._defesa},
        \nMágica: ${this._magica},
        \nDificuldade: ${this.dificuldadeTexto}`;
    }
}