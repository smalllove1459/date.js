/**
 * MIT License
 *
 * Copyright (c) 2016 湖南牧米网络科技有限公司
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * The built in Date object
 * @external Date
 */
;(function () {

    "use strict";

    Date.prototype.options = {

        shortMonths: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],

        longMonths: [
            'January',
            'February',
            '\\Marc\\h',
            'April',
            '\\May',
            'June',
            'July',
            'Augu\\st',
            '\\September',
            'October',
            'November',
            '\\December'
        ]

    };

    /**
     * Returns a string that contributes using the given pattern.
     * The following pattern letters are defined:
     *
     * > The definition of pattern letters is based on [ISO_8601](https://en.wikipedia.org/wiki/ISO_8601).
     *
     * | Letter | Date or Time Component                   | Presentation | Examples |
     * |--------|------------------------------------------|--------------|----------|
     * | Y      | Year                                     |  4 digits    |  2016    |
     * | YY     | idem                                     |  idem        |  2016    |
     * | YYY    | idem                                     |  idem        |  2016    |
     * | YYYY   | idem                                     |  idem        |  2016    |
     * | M      | Month                                    |  1-12        |  1       |
     * | MM     | idem                                     |  01-12       |  01      |
     * | MMM    | Abbreviations of the Names of the Months |  String      |  Jan     |
     * | MMMM   | Names of the Months                      |  String      |  January |
     * | D      | Day in month                             |  1-31        |  1       |
     * | DD     | idem                                     |  01-31       |  01      |
     * | h      | Hour in day                              |  0-23        |  1       |
     * | hh     | idem                                     |  00-23       |  00      |
     * | H      | Hour in am/pm                            |  0-12        |  1       |
     * | HH     | idem                                     |  00-12       |  00      |
     * | m      | Minute in hour                           |  0-59        |  1       |
     * | mm     | idem                                     |  00-59       |  01      |
     * | s      | Second in Minute                         |  0-59        |  1       |
     * | ss     | idem                                     |  00-59       |  01      |
     * | S      | Millisecond in Second                    |  0-999       |  1       |
     * | SS     | idem                                     |  00-999      |  01      |
     * | SSS    | idem                                     |  000-999     |  001     |
     * | \Y     | Character `Y`                            |              |          |
     * | \M     | Character `M`                            |              |          |
     * | \D     | Character `D`                            |              |          |
     * | \h     | Character `h`                            |              |          |
     * | \H     | Character `H`                            |              |          |
     * | \m     | Character `m`                            |              |          |
     * | \s     | Character `s`                            |              |          |
     * | \S     | Character `S`                            |              |          |
     *
     * @function external:Date#format
     * @param {String} pattern The pattern describing the date and time format
     * @returns {String|undefined} A string if the pattern is right, `undefined` otherwise.
     */
    Date.prototype.format = function (pattern) {

        var that = this;
        pattern = pattern.replace(/^Y{1,4}|([^\\])Y{1,4}/g, function (match, p1, offset, string) {
            return (p1 || '') + that.getFullYear();
        });

        var length;
        var regExp = /(^M{1,4})|([^\\])(M{1,4})/g;
        pattern = pattern.replace(regExp, function (match, p1, p2, p3, offset, string) {
            p1 = p1 || '';
            p2 = p2 || '';
            p3 = p3 || '';
            length = p1.length | p3.length;
            if (length === 1) {
                return p2 + (that.getMonth() + 1);
            } else if (length === 2) {
                var month = that.getMonth() + 1;
                return p2 + (month >= 10 ? '' : '0') + month;
            } else if (length === 3) {
                return p2 + that.options.shortMonths[that.getMonth()];
            } else if (length === 4) {
                return p2 + that.options.longMonths[that.getMonth()];
            }
        });

        regExp = /^(D{1,2})|([^\\])(D{1,2})/g;
        pattern = pattern.replace(regExp, function (match, p1, p2, p3, offset, string) {
            p1 = p1 || '';
            p2 = p2 || '';
            p3 = p3 || '';
            length = p1.length | p3.length;
            if (length === 1) {
                return p2 + that.getDate();
            } else if (length === 2) {
                var value = that.getDate();
                return p2 + (value >= 10 ? '' : '0') + value;
            }
        });

        regExp = /^(h{1,2}|H{1,2})|([^\\])(h{1,2}|H{1,2})/g;
        pattern = pattern.replace(regExp, function (match, p1, p2, p3, offset, string) {
            p1 = p1 || '';
            p2 = p2 || '';
            p3 = p3 || '';
            length = p1.length | p3.length;
            var _getHours = function () {
                var hours = that.getHours();
                var useAmPm = p1.indexOf('H') >= 0 || p3.indexOf('H') >= 0;
                return (useAmPm === true && hours > 12) ? hours - 12 : hours;
            };
            if (length === 1) {
                return p2 + _getHours();
            } else if (length === 2) {
                var value = _getHours();
                return p2 + (value >= 10 ? '' : '0') + value;
            }
        });

        regExp = /^(m{1,2})|([^\\])(m{1,2})/g;
        pattern = pattern.replace(regExp, function (match, p1, p2, p3, offset, string) {
            p1 = p1 || '';
            p2 = p2 || '';
            p3 = p3 || '';
            length = p1.length | p3.length;
            if (length === 1) {
                return p2 + that.getMinutes();
            } else if (length === 2) {
                var value = that.getMinutes();
                return p2 + (value >= 10 ? '' : '0') + value;
            }
        });

        regExp = /^(s{1,2})|([^\\])(s{1,2})/g;
        pattern = pattern.replace(regExp, function (match, p1, p2, p3, offset, string) {
            p1 = p1 || '';
            p2 = p2 || '';
            p3 = p3 || '';
            length = p1.length | p3.length;
            if (length === 1) {
                return p2 + that.getSeconds();
            } else if (length === 2) {
                var value = that.getSeconds();
                return p2 + (value >= 10 ? '' : '0') + value;
            }
        });

        regExp = /^(S{1,3})|([^\\])(S{1,3})/g;
        pattern = pattern.replace(regExp, function (match, p1, p2, p3, offset, string) {
            p1 = p1 || '';
            p2 = p2 || '';
            p3 = p3 || '';
            length = p1.length | p3.length;
            var value = that.getMilliseconds();
            if (length === 1) {
                return p2 + that.getMilliseconds();
            } else if (length === 2) {
                return p2 + (value < 10 ? '0' : '') + value;
            } else if (length === 3) {
                if (value < 10) {
                    return p2 + '00' + value;
                } else if (value < 100) {
                    return p2 + '0' + value;
                } else {
                    return p2 + value;
                }
            }
        });

        regExp = /\\([YMDHhmsS])/g;
        pattern = pattern.replace(regExp, function (match, p1, offset, string) {
            return p1 || '';
        });

        return pattern;
    };

    /**
     * Returns a new native Date object which is the first or the last day of the month.
     *
     * @function external:Date#toYmd
     * @param {Boolean} isFirst The flag standing for the first or the last day of the month
     * @returns {Date} A new native Date object
     */
    Date.prototype.toYmd = function (isFirst) {

        var parts = this.format('YYYY-MM').split(/-|\//);
        var year = Number(parts[0]);
        var month = Number(parts[1]) - 1;
        if (isFirst) {
            return new Date(year, month, 1);
        }
        if (month == 2) {
            if (year % 4 == 0) {
                return new Date(year, month, 29);
            } else {
                return new Date(year, month, 28);
            }
        } else {
            switch (month) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    return new Date(year, month, 31);
                default:
                    return new Date(year, month, 30);
            }
        }

    };

})();