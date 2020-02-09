import PatternHelper from './helper/pattern';
import GetData, { Result } from './helper/data';

/**
 * json parser class
 */
export default class Parser {
  private patternHelper: PatternHelper;
  private dataHelper: GetData;

  /**
   * @param {PatternHelper} patternHelper
   * @param {GetData} dataHelper
   */
  constructor(patternHelper: PatternHelper, dataHelper: GetData) {
    this.patternHelper = patternHelper;
    this.dataHelper = dataHelper;
  }

  /**
   * Gets the browser data formatr for the given user agent
   * (or null if no data avaailble, no even the default browser)
   *
   * @param {string} userAgent
   * @return {Partial<Result>}
   */
  public getBrowser(userAgent: string): Partial<Result> {
    userAgent = userAgent.toLowerCase();

    for (let patterns of this.patternHelper.getPatterns(userAgent)) {
      let patternToMatch = new RegExp(
        '^(?:' + patterns.join(')|(?:') + ')$',
        'i'
      );

      if (!patternToMatch.test(userAgent)) {
        continue;
      }

      for (let pattern of patterns) {
        pattern = pattern.replace(new RegExp('\\[\\\\d\\]', 'gi'), '(\\d)');
        let quotedPattern = new RegExp('^' + pattern + '$', 'i');

        if (!quotedPattern.test(userAgent)) {
          continue;
        }

        let matches = userAgent.match(quotedPattern);

        // Insert the digits back into the pattern, so that we can search the settings for it
        if (null !== matches && matches.length > 1) {
          matches.shift();

          for (let k = 0; k < matches.length; k++) {
            let numPos = pattern.indexOf('(\\d)');
            let sub = pattern.substr(numPos, 4);
            pattern = pattern.replace(sub, matches[k]);
          }
        }

        // Try to get settings - as digits have been replaced to speed up the pattern search,
        // we won't always find the data in the first step - so check if settings have been found and if not,
        // search for the next pattern.
        let settings = this.dataHelper.getSettings(pattern, {});

        if (Object.keys(settings).length) {
          return settings;
        }
      }
    }

    // return default
    return GetData.getDefaultProperties();
  }
}
