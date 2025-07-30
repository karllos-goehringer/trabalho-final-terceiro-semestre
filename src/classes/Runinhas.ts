export default class Runinha {
    private _id: number;
    private _key: string;
    private _icon: string;
    private _nome: string;
    private _descCurta: string;
    private _descLonga: string;
    constructor(id: number, key: string, icon: string, nome: string, descCurta: string, descLonga: string) {
        this._id = id;
        this._key = key;
        this._icon = icon;
        this._nome = nome;
        this._descCurta = descCurta;
        this._descLonga = descLonga;
    }
    public get id(): number {
        return this._id;
    }
    public get key(): string {
        return this._key;
    }
    public get icon(): string {
        return this._icon;
    }
    public get name(): string {
        return this._nome;
    }
    public get shortDesc(): string {
        return this._descCurta;
    }
    public get longDesc(): string {
        return this._descLonga;
    }
    public set id(valor: number) {
        this._id = valor;
    }
    public set key(valor: string) {
        this._key = valor;
    }
    public set icon(valor: string) {
        this._icon = valor;
    }
    public set nome(valor: string) {
        this._nome = valor;
    }
    public set descCurta(valor: string) {
        this._descCurta = valor;
    }
    public set descLonga(valor: string) {
        this._descLonga = valor;
    }
    toString(): string {
        return `
        \nRuna menor:
        \nID: ${this._id},
        \nKey: ${this._key},
        \nIcon: ${this._icon},
        \nNome: ${this._nome},
        \nDescrição Curta: ${this._descCurta},
        \nDescrição Longa: ${this._descLonga}`;
    }
}