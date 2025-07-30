import Mapa from './Mapa';
import Gold from './Gold';
import IPesquisavel from './IPesquisavel';
export default class Item implements IPesquisavel {
    private _id: number;
    private _nome: string;
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
    public get id(): number {
        return this._id;
    }
    public get description(): string {
        return this._description;
    }
    public get nome(): string {
        return this._nome;
    }
    public get imagem(): string {
        return this._image;
    }
    public get tags(): string[] {
        return this._tags;
    }
    public get mapa(): Mapa[] {
        return [...this._map];
    }
    public get ouro(): Gold {
        return this._gold;
    }
    public get precoBaseItem(): number {
        return this._gold.base;
    }
    public get precoVendaItem(): number {
        return this._gold.sell;
    }
    public get precoTotalItem(): number {
        return this._gold.total;
    }
    public set nome(valor: string) {
        this._nome = valor;
    }
    public set description(valor: string) {
        this._description = valor;
    }
    public set imagem(valor: string) {
        this._image = valor;
    }
    public set tags(valor: string[]) {
        this._tags = valor;
    }
    public set mapa(valor: Mapa[]) {
        this._map = [];
        valor.forEach(mapa => {
            this._map.push(mapa)
        });
    }
    public set ouro(valor: Gold) {
        this._gold = valor;
    }
    pesquisaPorId(id: number): boolean {
        return (this._id) === id;
    }
    pesquisaPorNome(nome: string): boolean {
        return this._nome.toLowerCase().includes(nome.toLowerCase());
    }
    toString(): string {
        return `
            \nItem: ${this._nome},
            \nID: ${this._id},
            \nDescrição: ${this._description},
            \nImagem: ${this._image},
            \n Ouro: ${JSON.stringify(this._gold)},
            \n Tags: ${this._tags.join(', ')},
            \n Mapas: ${this._map.map(mapa => mapa.nome).join(', ')}`;
    }
}