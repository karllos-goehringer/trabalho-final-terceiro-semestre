import Runinha from "./Runinhas";

export default interface Runa{
    id: number;
    nome: string;
    descricao: string;
    imagem: string;
    tipo: string; 
    caminho: string;
    runas: Runinha[];
    pesquisaPorNome(nome: string): boolean;
    pesquisaPorId(id: number): boolean;
}