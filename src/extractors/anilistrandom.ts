import { CheerioAPI, load } from 'cheerio';
import Proxy from '../models/proxy';

class AnilistRandomExtractor extends Proxy {
  protected url1 = 'https://anilist.co/sitemap/anime-0.xml';
  protected url2 = 'https://anilist.co/sitemap/anime-1.xml';

  extract = async (): Promise<string[]> => {
    const res = await Promise.all([this.client.get(this.url1), this.client.get(this.url2)]);
    const $ = load(res[0].data);
    const $1 = load(res[1].data);
    const ids: string[] = [];
    $('loc').each((_, el) => {
      ids.push($(el).text().split('/')[4]);
    });
    $1('loc').each((_, el) => {
      ids.push($1(el).text().split('/')[4]);
    });
    return ids;
  };
}

export default AnilistRandomExtractor;
