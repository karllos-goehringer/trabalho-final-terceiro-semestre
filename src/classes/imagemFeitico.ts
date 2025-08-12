export default class imagemFeitico{
    private _full:string;
    private _sprite:string;
    constructor(full:string, sprite:string){
        this._full = full
        this._sprite = sprite

    }
    public get sprite():string{
        return this._sprite
    }
    public get full():string{
        return this._full
    }
}