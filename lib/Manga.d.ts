import { IMangaDataBody, IMangaAttributes } from './models/MangaModels';
export default class Manga implements IMangaDataBody {
    attributes: IMangaAttributes;
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
    chapterCount: number | null;
    volumeCount: number | null;
    serialization: string | null;
    mangaType: string | null;
    constructor(id: string, attr: IMangaAttributes);
}
