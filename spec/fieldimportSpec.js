var path = require("path"),
	fieldImport = require("../server/src/field_import");

var getImport = function (fileName) {
	var filePath = path.join(__dirname, "./fixtures", fileName);
	return fieldImport.import(filePath);
};
describe("FieldImport", function () {


	describe("import functionality", function() {

		it("as a function named import", function () {
			expect(typeof fieldImport.import).toEqual("function");
		})

		it("works for data with single descendant", function () {
			var fieldsArray = getImport("fields_single_desc.json");
			expect(fieldsArray.size).toBe(1);
			expect(fieldsArray[99]).toEqual({number: 99});
		});

		it("works for data with two descendants", function () {
			var fieldsArray = getImport("fields_two_desc.json");
			expect(fieldsArray.size).toBe(2);
			expect(fieldsArray[11]).toEqual({number: 11});
			expect(fieldsArray[99]).toEqual({number: 99});
		});

		it("works for data with two descendants", function () {
			var fieldsArray = getImport("fields_multi_level_desc.json");
			expect(fieldsArray.size).toBe(5);
			expect(fieldsArray[11]).toEqual({number: 11});
			expect(fieldsArray[99]).toEqual({number: 99});
			expect(fieldsArray[5]).toEqual({number: 5, ancestor: 99});
			expect(fieldsArray[6]).toEqual({number: 6, ancestor: 99});
			expect(fieldsArray[7]).toEqual({number: 7, ancestor: 6});

		});


	})

});






