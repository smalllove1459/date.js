QUnit.test('date#format', function (assert) {
    var someDate = new Date(2016, 6, 9, 13, 9, 19, 9);
    assert.strictEqual(someDate.format('-Y-YY-YYY-YYYY-\\Y'), '-2016-2016-2016-2016-Y', 'Y tests fail.');
    assert.strictEqual(someDate.format('-M-MM-MMM-MMMM-\\M'), '-7-07-Jul-July-M', 'M tests fail.');
    assert.strictEqual(someDate.format('-D-DD-\\D'), '-9-09-D', 'D tests fail');
    assert.strictEqual(someDate.format('-h-hh-H-HH-\\h-\\H'), '-13-13-1-01-h-H', 'hH tests fail.');
    assert.strictEqual(someDate.format('-m-mm-\\m'), '-9-09-m');
    assert.strictEqual(someDate.format('-s-ss-\\s'), '-19-19-s');
    assert.strictEqual(someDate.format('-S-SS-SSS-\\S'), '-9-09-009-S');
});