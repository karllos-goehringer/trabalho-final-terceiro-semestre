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
}