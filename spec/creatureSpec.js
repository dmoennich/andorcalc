var creatures = require("../server/src/creatures");
describe("Creatures", function () {

	describe("is an array with all types of creatures", function () {

		it("containing Grol at first position", function () {
			expect(creatures[0]).toBe("Gor");
		});

		it("containing Skral at second position", function () {
			expect(creatures[1]).toBe("Skral");
		});

		it("containing Wardrak at third and fifth position", function () {
			expect(creatures[2]).toBe("Wardrak");
			expect(creatures[4]).toBe("Wardrak");
		});

		it("containing Troll at fourth position", function () {
			expect(creatures[3]).toBe("Troll");
		});

	});
});



