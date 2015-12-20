
describe("Fields", function () {

	var fields;

	beforeEach(function () {
		fields = createFields();
	});

	describe("provides a createFields function", function () {
		it("that creates arrays", function () {
			expect(Array.isArray(createFields())).toBe(true);
		});
	});

	describe("field arrays", function () {

		describe("have an add function", function () {

			it("that creates objects representing single fields and stores them in the array", function () {
				fields.add(99);
				expect(typeof fields[99]).toEqual("object");
			});

			it("that sets the given number parameter as a property of the new field object", function () {
				fields.add(2);
				expect(fields[2].number).toEqual(2);
			});

			it("that sets the given ancestor parameter as a property of the new field object", function () {
				var field = fields.add(2, 5);
				expect(fields[2].ancestor).toEqual(5);
			});

			it("that returns the fiels object for chaining", function () {
				var sameFields = fields.add(9,3);
				expect(fields).toBe(sameFields);
			});

		});


	});


});

