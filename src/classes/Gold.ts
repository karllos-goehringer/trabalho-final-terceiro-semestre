//Compõe o custo em ouro de um item
export default class Gold{
    private _base: number;
    private _total: number;
    private _sell: number;

    constructor(base: number, total: number, sell: number) {
        this._base = base;
        this._total = total;
        this._sell = sell;
    }

    public get base(): number {
        return this._base;
    }

    public get total(): number {
        return this._total;
    }

    public get sell(): number {
        return this._sell;
    }
    public set base(valor: number) {
        this._base = valor;
    }
    public set total(valor: number) {
        this._total = valor;
    }
    public set sell(valor: number) {
        this._sell = valor;
    }
    toString(): string {
        return `
        \nInformações de Ouro:
        \nBase: ${this._base}, 
        \nTotal: ${this._total}, 
        \nSell: ${this._sell}`;
    }
}