export default class Runinha {
    private _id: number;
    private _key: string;
    private _icon: string;
    private _nome: string;
    private _descCurta: string;
    private _descLonga: string;

    constructor(id: number,key: string,icon: string,nome: string,descCurta: string,descLonga: string) {
        this._id = id;
        this._key = key;
        this._icon = icon;
        this._nome = nome;
        this._descCurta = descCurta;
        this._descLonga = descLonga;
    }
    get id(): number {
        return this._id;
    }

    get key(): string {
        return this._key;
    }

    get icon(): string {
        return this._icon;
    }

    get name(): string {
        return this._nome;
    }

    get shortDesc(): string {
        return this._descCurta;
    }

    get longDesc(): string {
        return this._descLonga;
    }
}