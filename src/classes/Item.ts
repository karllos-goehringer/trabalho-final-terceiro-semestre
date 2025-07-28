import Mapa from './Mapa';
import Gold from './Gold';
import IPesquisavel from './IPesquisavel';
export default class Item implements IPesquisavel {
    public _id:number;
    public _nome: string;
    private _description: string;
    private _image: string;
    private _gold: Gold;
    private _tags: string[];
    private _map: Mapa[] = [];

    constructor(name: string, description: string, image: string, gold: Gold, tags: string[], map: Mapa[]) {
        this._nome = name;
        this._description = description;
        this._image = image;
        this._gold = gold;
        this._tags = tags;
        map.forEach(mapa => {
            this._map.push(mapa)
        });
        image = image.replace(/.png/, '')
       this._id = Number(image)
    }
    get id(): number {
        return this._id;
    }
    get description(): string {
        return this._description;
    }
    get nome(): string {
        return this._nome;
    }
    get imagem(): string {
        return this._image;
    }
    get tags(): string[] {
        return this._tags;
    }
    get mapa(): Mapa[] {
        return [...this._map];
    }
    get ouro(): Gold {
        return this._gold;
    }
    get precoBaseItem(): number {
        return this._gold.base;
    }
    get precoVendaItem(): number {
        return this._gold.sell;
    }
    get precoTotalItem(): number {
        return this._gold.total;
    }
    pesquisaPorId(id: number): boolean {
        return (this._id) === id;
    }
    pesquisaPorNome(nome: string): boolean {
        return this._nome.toLowerCase().includes(nome.toLowerCase());
    }
}