export interface IAttributes {
    createdAt: string;
    updatedAt: string;
    slug: string;
    synopsis: string;
    titles: {
        [key: string]: string;
        en: string;
        en_jp: string;
        ja_jp: string;
    };
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
        [key: string]: string;
        tiny: string;
        small: string;
        medium: string;
        large: string;
        original: string;
    };
}
