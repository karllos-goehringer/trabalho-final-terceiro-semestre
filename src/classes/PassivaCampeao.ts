import Habilidade from "./Habilidade";

export default class PassivaCampeao extends Habilidade {
  constructor(nome: string, descricao: string, icone: string) {
    super(nome, descricao, icone); // obrigatório
  }

  toString(): string {
    return `
            Passiva do Campeão:
              Nome: ${this.nome}
              Descrição: ${this.descricao}
              Ícone: ${this.icone}`;

  }
}