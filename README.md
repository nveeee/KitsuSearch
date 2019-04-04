# KitsuSearch:
### Kitsu.io Search Module w/ Promises

This library is pretty simple. Built off of the official API, KitsuSearch is fast and returns pretty much all of the attributes returned by the API.
https://kitsu.docs.apiary.io/#reference/media/anime/fetch-collection

Any issues/comments/critiques let me hear them! Here on github or @TheBetterEnvy on Twitter.

```javascript
const KitsuSearch = require('kitsu-search');

const api = new KitsuSearch();

api.searchAnime('My Hero Academia', { seasonYear: 2018 })
	.then(animeResults => {
		// Returns My Hero Academia 3(2018) as first result
		console.log(animeResults[0]);
	})
	.catch(e => console.error(e));
```

Kitsu search returns the maximum allowed 20 results per query

```typescript
import KitsuSearch from 'kitsu-search';

const api = new KitsuSearch();

api.searchAnime('My Hero Academia', { seasonYear: 2018 })
	.then(animeResults => {
		console.log(animeResults[0]);
	})
	.catch(e => console.error(e));
```

KitsuSearch also comes with typings for Typescript!

### Anime/Manga Attributes
```
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
abbreviatedTitles: string[];
averageRating: string;
startDate: string;
endDate: string;
status: string;
posterImage: {
	[key: string]: string
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
[ANIME ONLY]
episodeCount: number | null;
episodeLength: number | null;
showType: 'TV' | 'Special' | 'ONA' | 'OVA' | 'Movie' | 'Music';
nsfw: boolean;
[MANGA ONLY]
chapterCount: number;
volumeCount: number;
serialization: string;
mangaType: string;
```