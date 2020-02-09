/**
 * includes general functions for the work with patterns
 */
export default class SubKey {
  /**
   * Gets the subkey for the pattern cache file, generated from the given string
   *
   * @param  {string} string
   * @return {string}
   */
  public static getPatternCacheSubkey(string: string): string {
    return string.substring(0, 2);
  }

  /**
   * Gets the sub key for the ini parts cache file, generated from the given string
   *
   * @param {string} string
   * @return {string}
   */
  public static getIniPartCacheSubKey(string: string): string {
    return string.substring(0, 3);
  }
}
