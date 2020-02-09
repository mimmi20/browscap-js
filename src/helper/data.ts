import SubKey from './subkey';
import PatternHelper from './pattern/helper';
import Quoter from './quoter';
import BrowscapCache from 'browscap-js-cache';

export interface Result {
  Parent: string;
  browser_name_regex: string;
  browser_name_pattern: string;
  Comment: string;
  Browser: string;
  Browser_Type: string;
  Browser_Bits: string;
  Browser_Maker: string;
  Browser_Modus: string;
  Version: string;
  MajorVer: string;
  MinorVer: string;
  Platform: string;
  Platform_Version: string;
  Platform_Description: string;
  Platform_Bits: string;
  Platform_Maker: string;
  Alpha: boolean;
  Beta: boolean;
  Win16: boolean;
  Win32: boolean;
  Win64: boolean;
  Frames: boolean;
  IFrames: boolean;
  Tables: boolean;
  Cookies: boolean;
  BackgroundSounds: boolean;
  JavaScript: boolean;
  VBScript: boolean;
  JavaApplets: boolean;
  ActiveXControls: boolean;
  isMobileDevice: boolean;
  isTablet: boolean;
  isSyndicationReader: boolean;
  Crawler: boolean;
  isFake: boolean;
  isAnonymized: boolean;
  isModified: boolean;
  CssVersion: string;
  AolVersion: string;
  Device_Name: string;
  Device_Maker: string;
  Device_Type: string;
  Device_Pointing_Method: string;
  Device_Code_Name: string;
  Device_Brand_Name: string;
  RenderingEngine_Name: string;
  RenderingEngine_Version: string;
  RenderingEngine_Description: string;
  RenderingEngine_Maker: string;
}

/**
 * extracts the pattern and the data for theses pattern from the ini content
 */
export default class GetData {
  private cache: BrowscapCache;

  /**
   *
   * @param {BrowscapCache} cache
   */
  constructor(cache: BrowscapCache) {
    this.cache = cache;
  }

  /**
   * Gets the settings for a given pattern (method calls itself to
   * get the data from the parent patterns)
   *
   * @param {string} pattern
   * @param {Partial<Result>} settings
   * @return {Partial<Result>}
   */
  public getSettings(
    pattern: string,
    settings: Partial<Result> = {}
  ): Partial<Result> {
    // The pattern has been pre-quoted on generation to speed up the pattern search,
    // but for this check we need the unquoted version
    let unquotedPattern = Quoter.pregUnQuote(pattern);

    // Try to get settings for the pattern
    let addedSettings = this.getIniPart(unquotedPattern);

    // fallback, if Defaultproperties are empty
    if ('DefaultProperties' === unquotedPattern) {
      let defaultProperties = GetData.getDefaultProperties();

      // merge settings
      addedSettings = Object.assign(defaultProperties, addedSettings);
    }

    // set some additional data
    // The optimization with replaced digits get can now result in setting searches, for which we
    // won't find a result - so only add the pattern information, is settings have been found.
    //
    // If not an empty array will be returned and the calling function can easily check if a pattern
    // has been found.

    if (!Object.keys(settings).length && Object.keys(addedSettings).length) {
      let regexPattern = {
        browser_name_regex: '/^' + pattern + '$/',
        browser_name_pattern: unquotedPattern
      };

      settings = Object.assign(settings, regexPattern);
    }

    // check if parent pattern set, only keep the first one
    let parentPattern = null;

    if (addedSettings.hasOwnProperty('Parent')) {
      parentPattern = addedSettings.Parent;

      if (typeof settings['Parent'] !== 'undefined') {
        delete addedSettings['Parent'];
      }
    }

    // merge settings
    settings = Object.assign(addedSettings, settings);

    if (typeof parentPattern === 'string') {
      return this.getSettings(Quoter.pregQuote(parentPattern), settings);
    }

    return settings;
  }

  /**
   * Gets the relevant part (array of settings) of the ini file for a given pattern.
   *
   * @param  {string} pattern
   * @return {Partial<Result>}
   */
  public getIniPart(pattern: string): Partial<Result> {
    pattern = pattern.toLowerCase();

    let patternhash = PatternHelper.getHashForParts(pattern);
    let subkey = SubKey.getIniPartCacheSubKey(patternhash);

    let file = this.cache.getItem('browscap.iniparts.' + subkey, true);

    if (
      !file.success ||
      !Array.isArray(file.content) ||
      file.content.length === 0
    ) {
      return {};
    }

    for (let buffer of file.content) {
      let contents = buffer.split('\t');
      let tmpBuffer = contents.shift();

      if (tmpBuffer !== patternhash) {
        continue;
      }

      let tmp = contents.shift();

      if (typeof tmp === 'undefined') {
        continue;
      }

      return JSON.parse(tmp);
    }

    return {};
  }

  /**
   * @return {Partial<Result>}
   */
  public static getDefaultProperties(): Partial<Result> {
    return {
      Comment: 'Default Browser',
      Browser: 'Default Browser',
      Browser_Type: 'unknown',
      Browser_Bits: '0',
      Browser_Maker: 'unknown',
      Browser_Modus: 'unknown',
      Version: '0.0',
      MajorVer: '0',
      MinorVer: '0',
      Platform: 'unknown',
      Platform_Version: 'unknown',
      Platform_Description: 'unknown',
      Platform_Bits: '0',
      Platform_Maker: 'unknown',
      Alpha: false,
      Beta: false,
      Win16: false,
      Win32: false,
      Win64: false,
      Frames: false,
      IFrames: false,
      Tables: false,
      Cookies: false,
      BackgroundSounds: false,
      JavaScript: false,
      VBScript: false,
      JavaApplets: false,
      ActiveXControls: false,
      isMobileDevice: false,
      isTablet: false,
      isSyndicationReader: false,
      Crawler: false,
      isFake: false,
      isAnonymized: false,
      isModified: false,
      CssVersion: '0',
      AolVersion: '0',
      Device_Name: 'unknown',
      Device_Maker: 'unknown',
      Device_Type: 'unknown',
      Device_Pointing_Method: 'unknown',
      Device_Code_Name: 'unknown',
      Device_Brand_Name: 'unknown',
      RenderingEngine_Name: 'unknown',
      RenderingEngine_Version: 'unknown',
      RenderingEngine_Description: 'unknown',
      RenderingEngine_Maker: 'unknown'
    };
  }
}
