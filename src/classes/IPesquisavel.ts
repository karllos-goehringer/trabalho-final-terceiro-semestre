export default interface IPesquisavel {
    _nome: string;
    _id: number;
    pesquisaPorNome(nome: string): boolean;
    pesquisaPorId(id: number): boolean;
}