export interface IFilterAnime {
    season?: 'winter' | 'spring' | 'summer' | 'fall';
    seasonYear?: number;
    streamers?: 'Hulu' | 'Funimation' | 'Crunchyroll' | 'Viewster' | 'Daisuki' | 'Netflix' | 'HIDIVE' | 'TubiTV' | 'Netflix' | 'Youtube';
    rating?: 'G' | 'PG' | 'R' | 'R18';
}
interface ITitles {
    en: string | null;
    en_jp: string | null;
}
interface ICoverImage {
    tiny: string;
    small: string;
    medium: string;
    large: string;
    original: string;
}
interface IAttributes {
    createdAt: string;
    updatedAt: string;
    slug: string;
    synopsis: string;
    titles: ITitles;
    canonicalTitle: string;
    abbreviatedTitles: string[] | null;
    averageRating: string;
    startDate: string;
    endDate: string;
    status: string;
    posterImage: {
        [key: string]: string;
        tiny: string;
        small: string;
        medium: string;
        large: string;
        original: string;
    };
    coverImage: {
        [key: string]: ICoverImage;
    };
}
export interface IAnimeAttributes extends IAttributes {
    episodeCount: number | null;
    episodeLength: number | null;
    showType: 'TV' | 'Special' | 'ONA' | 'OVA' | 'Movie' | 'Music';
    nsfw: boolean;
}
export interface IMangaAttributes extends IAttributes {
    chapterCount: number;
    volumeCount: number;
    serialization: string;
    mangaType: string;
}
export interface IAnimeDataBody {
    id: string;
    type: 'anime';
    attributes: IAnimeAttributes;
}
export interface IMangaDataBody {
    id: string;
    type: 'anime' | 'manga';
    attributes: IMangaAttributes;
}
export {};
