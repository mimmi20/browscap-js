import PatternHelper from './pattern/helper';
import SubKey from './subkey';
import BrowscapCache from 'browscap-js-cache';

/**
 * extracts the pattern and the data for theses pattern from the ini content
 */
export default class Pattern {
  private cache: BrowscapCache;

  /**
   * @param {BrowscapCache} cache
   */
  constructor(cache: BrowscapCache) {
    this.cache = cache;
  }

  /**
   * Gets some possible patterns that have to be matched against the user agent. With the given
   * user agent string, we can optimize the search for potential patterns:
   * - We check the first characters of the user agent (or better: a hash, generated from it)
   * - We compare the length of the pattern with the length of the user agent
   *   (the pattern cannot be longer than the user agent!)
   *
   * @param {string} userAgent
   *
   * @return {array}
   */
  public *getPatterns(userAgent: string) {
    let length = PatternHelper.getPatternLength(userAgent);

    // get patterns, first for the given browser and if that is not found,
    // for the default browser (with a special key)
    for (let tmpStart of PatternHelper.getHashForPattern(userAgent)) {
      let tmpSubkey = SubKey.getPatternCacheSubkey(tmpStart);

      let file = this.cache.getItem('browscap.patterns.' + tmpSubkey, true);

      if (
        !file.success ||
        !Array.isArray(file.content) ||
        file.content.length === 0
      ) {
        continue;
      }

      let found = false;

      for (let buffer of file.content) {
        let split = buffer.split('\t');
        let tmpBuffer = split.shift();

        if (tmpBuffer === tmpStart) {
          let len = split.shift();

          if (typeof len === 'number' && len <= length) {
            yield split;
          }

          found = true;
        } else if (found === true) {
          break;
        }
      }
    }
  }
}
