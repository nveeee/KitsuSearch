import { IAttributes } from './GenericModels';
export interface IFilterAnime {
    season?: 'winter' | 'spring' | 'summer' | 'fall';
    seasonYear?: number;
    streamers?: 'Hulu' | 'Funimation' | 'Crunchyroll' | 'Viewster' | 'Daisuki' | 'Netflix' | 'HIDIVE' | 'TubiTV' | 'Netflix' | 'Youtube';
    rating?: 'G' | 'PG' | 'R' | 'R18';
}
export interface IAnimeAttributes extends IAttributes {
    episodeCount: number | null;
    episodeLength: number | null;
    showType: 'TV' | 'Special' | 'ONA' | 'OVA' | 'Movie' | 'Music';
    nsfw: boolean;
}
export interface IAnimeDataBody {
    id: string;
    attributes: IAnimeAttributes;
}
