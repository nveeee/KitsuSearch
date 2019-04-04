import { IAnimeDataBody, IAnimeAttributes } from './models/AnimeModels';
export default class Anime implements IAnimeDataBody {
    attributes: IAnimeAttributes;
    id: string;
    createdAt: string | null;
    updatedAt: string | null;
    slug: string | null;
    synopsis: string | null;
    titles: {
        [key: string]: string;
        en: string;
        en_jp: string;
        ja_jp: string;
    };
    canonTitle: string | null;
    abbreviatedTitles: string[] | null;
    avgRating: string | null;
    startDate: string | null;
    endDate: string | null;
    status: string | null;
    posterImage: {
        [key: string]: string;
        tiny: string;
        small: string;
        medium: string;
        large: string;
        original: string;
    };
    coverImage: {
        [key: string]: string;
        tiny: string;
        small: string;
        medium: string;
        large: string;
        original: string;
    };
    epCount: number | null;
    showType: string;
    nsfw: boolean;
    constructor(id: string, attr: IAnimeAttributes);
}
