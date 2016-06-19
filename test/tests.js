QUnit.test("qunit test", function (assert) {
    assert.ok(1 == "1", "Passed!");
});

QUnit.test("message test", function (assert) {
    var funnies = new $d.Funnies();
    var msg = funnies.message();
    assert.ok(msg !== "", "Passed!");
});

