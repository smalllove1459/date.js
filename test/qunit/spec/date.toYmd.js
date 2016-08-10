QUnit.test('date#toYmd', function (assert) {
    var someDate = new Date(2016, 7);
    assert.strictEqual(someDate.toYmd().format('yyyy-MM-dd'), '2016-08-31', 'toYmd; fails');
    assert.strictEqual(someDate.toYmd(true).format('yyyy-MM-dd'), '2016-08-01', 'toYmd(true); fails');
});