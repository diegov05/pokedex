export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    baseExperience: number;
    abilities: Ability[];
    types: Type[];
    stats: Stat[];
    sprites: Sprites;
}

export interface Ability {
    id: number;
    name: string;
    isHidden: boolean;
    slot: number;
    effectEntries: AbilityEffect[];
}

export interface AbilityEffect {
    effect: string;
    language: {
        name: string;
        url: string;
    };
}
export interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface Stat {
    baseStat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

export interface Sprites {
    front_default: string;
    front_shiny: string;
    frontFemale?: string;
    front_shiny_Female?: string;
    backDefault: string;
    backShiny: string;
    backFemale?: string;
    backShinyFemale?: string;
    other: {
        dreamWorld: {
            front_default: string;
            frontFemale?: string;
        };
        home: {
            front_default: string;
            front_female: string;
        }
        "official-artwork": {
            front_default: string;
        };
    };
}
