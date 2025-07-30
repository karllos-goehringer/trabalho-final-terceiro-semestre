export default interface IPesquisavel {
    nome: string;
    id: number;
    pesquisaPorNome(nome: string): boolean;
    pesquisaPorId(id: number): boolean;
}