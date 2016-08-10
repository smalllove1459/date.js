QUnit.test('date#format', function (assert) {
    var someDate = new Date(2016, 7, 9);
    assert.strictEqual(someDate.format('yyyy-MM-dd'), '2016-08-09', 'yyyy-MM-dd; fails');
    assert.strictEqual(someDate.format('yyyy-M-d'), '2016-8-9', 'yyyy-M-d; fails');
    assert.strictEqual(someDate.format('yy-M-d'), '16-8-9', 'yy-M-d; fails');

});