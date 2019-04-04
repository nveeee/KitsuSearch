import { IFilterAnime } from './models/AnimeModels';
import { IFilterManga, IMangaDataBody } from './models/MangaModels';
import Anime from './Anime';
export default class KitsuSearch {
    private readonly path;
    private readonly header;
    /**
     *
     * @param text Search query(e.g 'Cowboy Bebop')
     * @param filter Optional { season, seasonYear, streamers, rating }
     * @returns Returns top ten results on successful query
     */
    searchAnime(text?: string, filter?: IFilterAnime): Promise<Array<Anime>>;
    /**
     *
     * @param text Search query(e.g 'Cowboy Bebop')
     * @param filter Optional { chapterCount }
     * @returns Returns top twenty results on successful query
     */
    searchManga(text?: string, filter?: IFilterManga): Promise<Array<IMangaDataBody>>;
    private query;
    private parseAnimeURL;
    private parseMangaURL;
}
