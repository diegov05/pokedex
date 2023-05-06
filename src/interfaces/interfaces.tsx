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
    ability: {
        name: string;
        url: string;
    };
    isHidden: boolean;
    slot: number;
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
    frontDefault: string;
    frontShiny: string;
    frontFemale?: string;
    frontShinyFemale?: string;
    backDefault: string;
    backShiny: string;
    backFemale?: string;
    backShinyFemale?: string;
    other: {
        dreamWorld: {
            frontDefault: string;
            frontFemale?: string;
        };
        officialArtwork: {
            frontDefault: string;
        };
    };
}
