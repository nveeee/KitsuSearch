"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request-promise");
const Anime_1 = require("./Anime");
const Manga_1 = require("./Manga");
class KitsuSearch {
    constructor() {
        this.path = 'https://kitsu.io/api/edge/';
        this.header = 'application/vnd.api+json';
    }
    /**
     *
     * @param text Search query(e.g 'Cowboy Bebop')
     * @param filter Optional { season, seasonYear, streamers, rating }
     * @returns Returns top ten results on successful query
     */
    searchAnime(text, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `${this.path}anime`;
            try {
                query = this.parseAnimeURL(query, text, filter);
                const response = yield this.query(query);
                return response.map((anime) => new Anime_1.default(anime.id, anime.attributes));
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    /**
     *
     * @param text Search query(e.g 'Cowboy Bebop')
     * @param filter Optional { chapterCount }
     * @returns Returns top twenty results on successful query
     */
    searchManga(text, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `${this.path}manga`;
            try {
                query = this.parseMangaURL(query, text, filter);
                const response = yield this.query(query);
                return response.map((manga) => new Manga_1.default(manga.id, manga.attributes));
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    query(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield request(query, { json: true, headers: { 'Accept': this.header, 'Content-Type': this.header } });
                if (data.length < 1)
                    throw new Error('There were no results for your query');
                return data;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    parseAnimeURL(query, text, filter) {
        if (text)
            query += `?filter%5Btext%5D=${text}`;
        if (filter) {
            if (filter.rating)
                query += `&filter%5Brating%5D=${filter.rating}`;
            if (filter.season)
                query += `&filter%5Bseason%5D=${filter.season}`;
            if (filter.seasonYear)
                query += `&filter%5BseasonYear%5D=${filter.seasonYear}`;
            if (filter.streamers)
                query += `&filter%5Bstreamers%5D=${filter.streamers}`;
        }
        if (text)
            query += '&page%5Blimit%5D=20';
        if (!text)
            query += '?page%5Blimit%5D=20';
        return query;
    }
    parseMangaURL(query, text, filter) {
        if (text)
            query += `?filter%5Btext%5D=${text}`;
        if (filter) {
            if (filter.chapterCount)
                query += `&filter%5BchapterCount%5D=${filter.chapterCount}`;
        }
        return query;
    }
}
exports.default = KitsuSearch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUEyQztBQUczQyxtQ0FBNEI7QUFDNUIsbUNBQTRCO0FBRTVCLE1BQXFCLFdBQVc7SUFBaEM7UUFDa0IsU0FBSSxHQUFXLDRCQUE0QixDQUFDO1FBQzVDLFdBQU0sR0FBVywwQkFBMEIsQ0FBQztJQWtFOUQsQ0FBQztJQWhFQTs7Ozs7T0FLRztJQUNVLFdBQVcsQ0FBQyxJQUFhLEVBQUUsTUFBcUI7O1lBQzVELElBQUksS0FBSyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDO1lBQ2hDLElBQUk7Z0JBQ0gsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDaEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QyxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxJQUFJLGVBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQ3RGO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN2QjtRQUNGLENBQUM7S0FBQTtJQUVEOzs7OztPQUtHO0lBQ1UsV0FBVyxDQUFDLElBQWEsRUFBRSxNQUFxQjs7WUFDNUQsSUFBSSxLQUFLLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUM7WUFDaEMsSUFBSTtnQkFDSCxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNoRCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pDLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLElBQUksZUFBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDdEY7WUFBQyxPQUFNLEtBQUssRUFBRTtnQkFDZCxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3ZCO1FBQ0YsQ0FBQztLQUFBO0lBRWEsS0FBSyxDQUFDLEtBQWE7O1lBQ2hDLElBQUk7Z0JBQ0gsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZILElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztnQkFDN0UsT0FBTyxJQUFVLENBQUM7YUFDbEI7WUFBQyxPQUFNLEtBQUssRUFBRTtnQkFDZCxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3ZCO1FBQ0YsQ0FBQztLQUFBO0lBRU8sYUFBYSxDQUFDLEtBQWEsRUFBRSxJQUFhLEVBQUUsTUFBcUI7UUFDeEUsSUFBSSxJQUFJO1lBQUUsS0FBSyxJQUFHLHFCQUFxQixJQUFJLEVBQUUsQ0FBQztRQUM5QyxJQUFJLE1BQU0sRUFBRTtZQUNYLElBQUksTUFBTSxDQUFDLE1BQU07Z0JBQUUsS0FBSyxJQUFJLHVCQUF1QixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbkUsSUFBSSxNQUFNLENBQUMsTUFBTTtnQkFBRSxLQUFLLElBQUksdUJBQXVCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNuRSxJQUFJLE1BQU0sQ0FBQyxVQUFVO2dCQUFFLEtBQUssSUFBSSwyQkFBMkIsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQy9FLElBQUksTUFBTSxDQUFDLFNBQVM7Z0JBQUUsS0FBSyxJQUFJLDBCQUEwQixNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDNUU7UUFDRCxJQUFJLElBQUk7WUFBRSxLQUFLLElBQUkscUJBQXFCLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUk7WUFBRSxLQUFLLElBQUkscUJBQXFCLENBQUM7UUFDMUMsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRU8sYUFBYSxDQUFDLEtBQWEsRUFBRSxJQUFhLEVBQUUsTUFBcUI7UUFDeEUsSUFBSSxJQUFJO1lBQUUsS0FBSyxJQUFHLHFCQUFxQixJQUFJLEVBQUUsQ0FBQztRQUM5QyxJQUFJLE1BQU0sRUFBRTtZQUNYLElBQUksTUFBTSxDQUFDLFlBQVk7Z0JBQUUsS0FBSyxJQUFJLDZCQUE2QixNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckY7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Q0FDRDtBQXBFRCw4QkFvRUMifQ==