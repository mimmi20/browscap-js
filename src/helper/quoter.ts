/**
 * class to help quoting strings for using a regex
 */
export default class Quoter {
  /**
   * Converts browscap match patterns into preg match patterns.
   *
   * @param {string} userAgent
   *
   * @return {string}
   */
  public static pregQuote(userAgent: string): string {
    // original by: booeyOH
    // improved by: Ates Goral (http://magnetiq.com)
    // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // improved by: Brett Zamir (http://brett-zamir.me)
    // bugfixed by: Onno Marsman
    //   example 1: preg_quote("$40");
    //   returns 1: '\\$40'
    //   example 2: preg_quote("*RRRING* Hello?");
    //   returns 2: '\\*RRRING\\* Hello\\?'
    //   example 3: preg_quote("\\.+*?[^]$(){}=!<>|:");
    //   returns 3: '\\\\\\.\\+\\*\\?\\[\\^\\]\\$\\(\\)\\{\\}\\=\\!\\<\\>\\|\\:'

    return (
      String(userAgent)
        .replace(new RegExp('[.\\\\+*?\\[^\\]$(){}=!<>|:\\-]', 'g'), '\\$&')
        .replace('\\\\*', '.*')
        .replace('\\\\?', '.')
        // the \\x replacement is a fix for "Der gro\xdfe BilderSauger 2.00u" user agent match
        .replace('\\x', '\\\\x')
    );
  }

  /**
   * Reverts the quoting of a pattern.
   *
   * @param {string} pattern
   * @return {string}
   */
  public static pregUnQuote(pattern: string): string {
    let regex = new RegExp('[^a-z0-9\\s]', 'i');

    if (!regex.test(pattern)) {
      return pattern;
    }

    // Undo the \\x replacement, that is a fix for "Der gro\xdfe BilderSauger 2.00u" user agent match
    // @source https://github.com/browscap/browscap-php
    return (
      pattern
        .replace('/(?<!\\\\)\\.\\*/gi', '\\*')
        .replace('/(?<!\\\\)\\./gi', '\\?')
        .replace('/(?<!\\\\)\\\\x/gi', '\\x')
        // replace \. -> \?
        .replace(new RegExp('\\\\\\.', 'gi'), '\\?')
        // replace \\ -> \
        .replace(new RegExp('\\\\\\\\', 'gi'), '\\')
        // replace \+ -> +
        .replace(
          new RegExp('\\\\([.\\\\+*\\[^\\]$(){}=!<>|:\\-@])', 'gi'),
          '$1'
        )
        // replace .* -> *
        .replace(new RegExp('\\.\\*', 'gi'), '*')
        // replace . -> ?
        .replace(new RegExp('\\.', 'gi'), '?')
        // replace \? -> .
        .replace(new RegExp('\\\\\\?', 'gi'), '.')
        // replace \/ -> /
        .replace(new RegExp('\\\\\\/', 'gi'), '/')
    );
  }
}
