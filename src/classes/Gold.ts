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

    get base(): number {
        return this._base;
    }

    get total(): number {
        return this._total;
    }

    get sell(): number {
        return this._sell;
    }
}