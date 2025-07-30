export default class StatusCampeao {
    private _vida: number;
    private _vidaPorLv: number;
    private _mana: number;
    private _manaPorLv: number;
    private _velocMovimento: number;
    private _armadura: number;
    private _armaduraPorLv: number;
    private _spellblock: number;
    private _spellblockPorLv: number;
    private _alcanceAtck: number;
    private _hpregen: number;
    private _hpregenPorLv: number;
    private _mpregen: number;
    private _mpregenPorLv: number;
    private _crit: number;
    private _critPorLv: number;
    private _attackdamage: number;
    private _attackdamagePorLv: number;
    private _attackspeedPorLv: number;
    private _attackspeed: number;
    constructor(vida: number, vidaPorLv: number, mana: number, manaPorLv: number, velocMovimento: number, armadura: number, armaduraPorLv: number, spellblock: number, spellblockPorLv: number, alcanceAtck: number, hpregen: number, hpregenPorLv: number, mpregen: number, mpregenPorLv: number, crit: number, critPorLv: number, attackdamage: number, attackdamagePorLv: number, attackspeedPorLv: number, attackspeed: number) {
        this._vida = vida;
        this._vidaPorLv = vidaPorLv;
        this._mana = mana;
        this._manaPorLv = manaPorLv;
        this._velocMovimento = velocMovimento;
        this._armadura = armadura;
        this._armaduraPorLv = armaduraPorLv;
        this._spellblock = spellblock;
        this._spellblockPorLv = spellblockPorLv;
        this._alcanceAtck = alcanceAtck;
        this._hpregen = hpregen;
        this._hpregenPorLv = hpregenPorLv;
        this._mpregen = mpregen;
        this._mpregenPorLv = mpregenPorLv;
        this._crit = crit;
        this._critPorLv = critPorLv;
        this._attackdamage = attackdamage;
        this._attackdamagePorLv = attackdamagePorLv;
        this._attackspeedPorLv = attackspeedPorLv;
        this._attackspeed = attackspeed;
    }
    public get vida() {
        return this._vida;
    };
    public get vidaPorLv() {
        return this._vidaPorLv;
    };
    public get mana() {
        return this._mana;
    };
    public get manaPorLv() {
        return this._manaPorLv;
    };
    public get velocMovimento() {
        return this._velocMovimento;
    };
    public get armadura() {
        return this._armadura;
    };
    public get armaduraPorLv() {
        return this._armaduraPorLv;
    };
    public get spellblock() {
        return this._spellblock;
    };
    public get spellblockPorLv() {
        return this._spellblockPorLv;
    };
    public get alcanceAtck() {
        return this._alcanceAtck;
    };
    public get hpregen() {
        return this._hpregen;
    };
    public get hpregenPorLv() {
        return this._hpregenPorLv;
    };
    public get mpregen() {
        return this._mpregen;
    };
    public get mpregenPorLv() {
        return this._mpregenPorLv;
    };
    public get crit() {
        return this._crit;
    };
    public get critPorLv() {
        return this._critPorLv;
    };
    public get attackdamage() {
        return this._attackdamage;
    };
    public get attackdamagePorLv() {
        return this._attackdamagePorLv;
    };
    public get attackspeedPorLv() {
        return this._attackspeedPorLv;
    };
    public get attackspeed() {
        return this._attackspeed;
    };
    public set attackspeed(valor: number) {
        this._attackspeed = valor;
    }
    public set attackspeedPorLv(valor: number) {
        this._attackspeedPorLv = valor;
    }
    public set attackdamagePorLv(valor: number) {
        this._attackdamagePorLv = valor;
    }
    public set attackdamage(valor: number) {
        this._attackdamage = valor;
    }
    public set critPorLv(valor: number) {
        this._critPorLv = valor;
    }
    public set crit(valor: number) {
        this._crit = valor;
    }
    public set mpregenPorLv(valor: number) {
        this._mpregenPorLv = valor;
    }
    public set mpregen(valor: number) {
        this._mpregen = valor;
    }
    public set hpregenPorLv(valor: number) {
        this._hpregenPorLv = valor;
    }
    public set hpregen(valor: number) {
        this._hpregen = valor;
    }
    public set alcanceAtck(valor: number) {
        this._alcanceAtck = valor;
    }
    public set spellblockPorLv(valor: number) {
        this._spellblockPorLv = valor;
    }
    public set spellblock(valor: number) {
        this._spellblock = valor;
    }
    public set armaduraPorLv(valor: number) {
        this._armaduraPorLv = valor;
    }
    public set armadura(valor: number) {
        this._armadura = valor;
    }
    public set velocMovimento(valor: number) {
        this._velocMovimento = valor;
    }
    public set manaPorLv(valor: number) {
        this._manaPorLv = valor;
    }
    public set mana(valor: number) {
        this._mana = valor;
    }
    public set vidaPorLv(valor: number) {
        this._vidaPorLv = valor;
    }
    public set vida(valor: number) {
        this._vida = valor;
    }
    toString(): string {
        return `\n
        \nStatus do Campeão:
                \nVida: ${this._vida}, Mana: ${this._mana}, 
                \nVelocidade de Movimento: ${this._velocMovimento}, 
                \nArmadura: ${this._armadura}, 
                \nResistência Mágica: ${this._spellblock}, 
                \nAlcance de Ataque: ${this._alcanceAtck}, 
                \nRegeneração de Vida: ${this._hpregen}, 
                \nRegeneração de Mana: ${this._mpregen}, 
                \nCrítico: ${this._crit}, 
                \nDano de Ataque: ${this._attackdamage}, 
                \nVelocidade de Ataque: ${this._attackspeed}
                \n\n`;
    }
}