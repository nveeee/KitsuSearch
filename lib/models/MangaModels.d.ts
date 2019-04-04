import { IAttributes } from './GenericModels';
export interface IFilterManga {
    chapterCount?: number;
}
export interface IMangaAttributes extends IAttributes {
    chapterCount: number;
    volumeCount: number;
    serialization: string;
    mangaType: string;
}
export interface IMangaDataBody {
    id: string;
    attributes: IMangaAttributes;
}
