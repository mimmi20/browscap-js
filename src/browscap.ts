import BrowscapCache from 'browscap-js-cache';
import Parser from './parser';
import Pattern from './helper/pattern';
import GetData, { Result } from './helper/data';

/**
 * main class
 */
export default class Browscap {
  private cacheDir: string;

  constructor() {
    this.cacheDir =
      require('path').dirname(require.resolve('browscap-json-cache-files')) +
      '/sources/';
  }

  /**
   * parses the given user agent to get the information about the browser
   *
   * if no user agent is given, it uses {@see \BrowscapPHP\Helper\Support} to get it
   *
   * @param {string} userAgent the user agent string
   *
   * @return {Partial<Result>}
   */
  public getBrowser(userAgent: string): Partial<Result> {
    let cache = new BrowscapCache(this.cacheDir);
    let patternHelper = new Pattern(cache);
    let dataHelper = new GetData(cache);

    let parser = new Parser(patternHelper, dataHelper);

    return parser.getBrowser(userAgent);
  }
}
