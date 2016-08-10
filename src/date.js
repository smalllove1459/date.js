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

    /**
     * Returns a string that contributes using the given pattern.
     * The following pattern letters are defined:
     *
     * @function external:Date#format
     * @param {String} pattern The pattern describing the date and time format
     * @returns {String|undefined} A string if the pattern is right, `undefined` otherwise.
     */
    Date.prototype.format = function (pattern) {

        var map = {
            "M+": this.getMonth() + 1,   // 月份
            "d+": this.getDate(),        // 日
            "h+": this.getHours(),       // 小时
            "m+": this.getMinutes(),     // 分
            "s+": this.getSeconds(),     // 秒
            "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
            "S": this.getMilliseconds()  // 毫秒
        };

        if (/(y+)/.test(pattern)) {
            pattern = pattern.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        for (var key in map) {
            if (new RegExp("(" + key + ")").test(pattern)) {
                pattern = pattern.replace(RegExp.$1, (RegExp.$1.length == 1) ? (map[key]) : (("00" + map[key]).substr(("" + map[key]).length)));
            }
        }

        return pattern;
    };

    Date.prototype.toYmd = function (isFirst) {

        var parts = this.format('yyyy-MM').split(/-|\//);
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