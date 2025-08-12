import Mapa from './Mapa'
import Item from './Item'
import Gold from './Gold'
import RepositorioInstanciados from './RepositorioIntanciados';
import InfoCampeao from './InfoCampeao';
import StatusCampeao from './StatusCampeao';
import PassivaCampeao from './PassivaCampeao';
import HabilidadeCampeao from './HabilidadeCampeao';
import Campeao from './Campeao';
import Runinha from './Runinhas';
import Runa from './Runa';
import Feitico from './Feitico';
import imagemFeitico from './imagemFeitico';

export default class ControladorRepositorio {
  static async getPatch() {
    const versao = await fetch('https://ddragon.leagueoflegends.com/api/versions.json')
      .then(res => res.json()).then(versoes => versoes[0]);
    return (versao)
  }
  static limparTagsHTML(texto: string): string {
    return texto.replace(/<[^>]+>/g, '');
  }
  static  limparPlaceholders(texto: string): string {
  return texto.replace(/{{[^}]+}}/g, "").trim();
}
  static async criarRepositorioItens() {
    const versao = await ControladorRepositorio.getPatch();
    const urlItens = `https://ddragon.leagueoflegends.com/cdn/${versao}/data/pt_BR/item.json`;
    const itens = await fetch(urlItens).then(res => res.json());
    const itensArray = Object.values(itens.data);
    const vetItensLol = RepositorioInstanciados.getItensLol();
    itensArray.forEach((item: any) => {
      item.description = ControladorRepositorio.limparTagsHTML(item.description);
      if (item.description !== '') {
        const jaExiste = vetItensLol.some(i => i.nome === item.name);
        if (!jaExiste) {
          const mapasItem = Mapa.construirMapas(item.maps);
          RepositorioInstanciados.addVetLol(
            new Item(
              item.name,
              item.description,
              item.image.full,
              new Gold(item.gold.base, item.gold.total, item.gold.sell),
              item.tags,
              mapasItem
            )
          );
        }
      }
    }
    );
  }
  static async CriarRepositorioCampeoes() {
    const versao: string = await ControladorRepositorio.getPatch()
    const urlCampeoes = `https://ddragon.leagueoflegends.com/cdn/${versao}/data/pt_BR/champion.json`;
    const campeoes = await fetch(urlCampeoes).then(res => res.json());
    const campeoesArray = Object.values(campeoes.data) as any[];
    for (let i = 0; i < campeoesArray.length; i++) {
      const campeao = campeoesArray[i];
      const info = new InfoCampeao(
        campeao.info.attack,
        campeao.info.defense,
        campeao.info.magic,
        campeao.info.difficulty
      );
      const status = await ControladorRepositorio.GetStatusChampion(campeao.id, versao);
      const spellsVet = await ControladorRepositorio.GetSpellsChampion(campeao.id, versao);
      const passiva = await ControladorRepositorio.GetPassivaChampion(campeao.id, versao);
      const objCampeao = new Campeao(
        Number(campeao.key),
        campeao.id,
        campeao.name,
        campeao.title,
        campeao.blurb,
        campeao.tags,
        campeao.partype,
        status,
        info,
        spellsVet,
        passiva
      );
      RepositorioInstanciados.addVetCampeao(objCampeao)
    }
  }
  static async CriarRepositorioRunas() {
    const versao = await ControladorRepositorio.getPatch();
    const urlRunas = `https://ddragon.leagueoflegends.com/cdn/${versao}/data/pt_BR/runesReforged.json`;
    const caminhos = await fetch(urlRunas).then(res => res.json());

    for (const caminho of caminhos) {
      const runas: Runinha[] = [];

      for (const slot of caminho.slots) {
        for (const runa of slot.runes) {
          let descCurta = ControladorRepositorio.limparTagsHTML(runa.shortDesc);
          let descLonga = ControladorRepositorio.limparTagsHTML(runa.longDesc);
          runas.push(
            new Runinha(
              runa.id,
              runa.key,
              runa.icon,
              runa.name,
              descCurta,
              descLonga
            )
          );
        }
      }
      const instancia: Runa = new Runa(caminho.id,
        caminho.name,
        "",
        caminho.icon,
        "Primária",
        caminho.key,
        runas
      );


      RepositorioInstanciados.addVetRuna(instancia);
    }



  }
  static async GetStatusChampion(nomeCampeao: string, versao: string): Promise<StatusCampeao> {
    const url = `https://ddragon.leagueoflegends.com/cdn/${versao}/data/pt_BR/champion/${nomeCampeao}.json`;
    const resposta = await fetch(url);
    const dados = await resposta.json();
    const stats = dados.data[nomeCampeao].stats;
    return new StatusCampeao(
      stats.hp,
      stats.hpperlevel,
      stats.mp,
      stats.mpperlevel,
      stats.movespeed,
      stats.armor,
      stats.armorperlevel,
      stats.spellblock,
      stats.spellblockperlevel,
      stats.attackrange,
      stats.hpregen,
      stats.hpregenperlevel,
      stats.mpregen,
      stats.mpregenperlevel,
      stats.crit,
      stats.critperlevel,
      stats.attackdamage,
      stats.attackdamageperlevel,
      stats.attackspeedperlevel,
      stats.attackspeed
    );
  }
  static async GetPassivaChampion(nomeCampeao: string, versao: string): Promise<PassivaCampeao> {
    const url = `https://ddragon.leagueoflegends.com/cdn/${versao}/data/pt_BR/champion/${nomeCampeao}.json`;
    const resposta = await fetch(url);
    const dados = await resposta.json();
    const passiva = dados.data[nomeCampeao].passive;
    let descricao = ControladorRepositorio.limparTagsHTML(passiva.description);
    const passivaCampeao = new PassivaCampeao(
      passiva.name,
      descricao,
      `https://ddragon.leagueoflegends.com/cdn/${versao}/img/passive/${passiva.image.full}`
    );
    return (passivaCampeao)
  }
  static async GetSpellsChampion(nomeCampeao: string, versao: string): Promise<HabilidadeCampeao[]> {
    const url = `https://ddragon.leagueoflegends.com/cdn/${versao}/data/pt_BR/champion/${nomeCampeao}.json`;
    const resposta = await fetch(url);
    const dados = await resposta.json();
    const spells = dados.data[nomeCampeao].spells;

    return spells.map((spell: any) => {
      let descricao = ControladorRepositorio.limparTagsHTML(spell.description);
      return new HabilidadeCampeao(
        spell.id,
        spell.name,
        descricao,
        `https://ddragon.leagueoflegends.com/cdn/${versao}/img/spell/${spell.image.full}`,
        spell.tooltip,
        spell.cooldown,
        spell.cost,
        spell.range,
      );
    });
  }
  static async CriarFeiticos(){
    let versao:string = await ControladorRepositorio.getPatch();
    const urlFeitico = `https://ddragon.leagueoflegends.com/cdn/${versao}/data/pt_BR/summoner.json`;
    const feiticos = await fetch(urlFeitico).then(res => res.json());
    const feiticosArray = Object.values(feiticos.data) as any[];
    feiticosArray.forEach((spell) => {
      let tooltipFormatado =  ControladorRepositorio.limparPlaceholders(spell.tooltip)
      tooltipFormatado =  ControladorRepositorio.limparTagsHTML(tooltipFormatado)

      let descricaoFormatada = ControladorRepositorio.limparTagsHTML(spell.description)
      let imagem = new imagemFeitico (spell.image.full,spell.image.sprite)
      let novoFeitico =  new Feitico(
        spell.name,
        spell.key,
        imagem,
        spell.costType,
        descricaoFormatada,
        tooltipFormatado
      )
      RepositorioInstanciados.addVetFeitico(novoFeitico);
    })

  }
  static async inicializarRepositorios() {
    return ControladorRepositorio.criarRepositorioItens()
      .then(() => ControladorRepositorio.CriarRepositorioCampeoes()
        .then(() => ControladorRepositorio.CriarRepositorioRunas()
        .then(() => ControladorRepositorio.CriarFeiticos()
        )));
  }


}