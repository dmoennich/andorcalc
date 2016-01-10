var fields = require("../server/src/fields"),
	movement = require("../server/src/movement"),
	creatures = require("../server/src/creatures");

describe("movement", function () {

	describe("next method", function () {


		it("should put creature forward each round", function () {

			var fieldsArray = fields()
				.add(0).add(1, 0).add(2, 1).add(3, 2).add(10, 0);
			fieldsArray[3].creature = creatures.skral;

			movement.next(fieldsArray);
			expect(fieldsArray[3].creature).toBeUndefined();
			expect(fieldsArray[2].creature).toEqual(creatures.skral);

			movement.next(fieldsArray);
			expect(fieldsArray[2].creature).toBeUndefined();
			expect(fieldsArray[1].creature).toEqual(creatures.skral);

			movement.next(fieldsArray);
			expect(fieldsArray[1].creature).toBeUndefined();
			expect(fieldsArray[0].creatures.length).toBe(1);
			expect(fieldsArray[0].creatures[0]).toEqual(creatures.skral);

		});


		it("should keep all creatures in root fields in an array", function () {
			var fieldsArray = fields()
				.add(0).add(1, 0).add(2, 0).add(3, 0);
			fieldsArray[1].creature = creatures.skral;
			fieldsArray[2].creature = creatures.skral;
			fieldsArray[3].creature = creatures.skral;

			movement.next(fieldsArray);
			expect(fieldsArray[0].creatures.length).toBe(3);
			expect(fieldsArray[0].creatures[0]).toEqual(creatures.skral);
			expect(fieldsArray[0].creatures[1]).toEqual(creatures.skral);
			expect(fieldsArray[0].creatures[2]).toEqual(creatures.skral);
		});


		it("should move in order: first Grols, then Skrals, Wardraks, Trolls", function () {
			var fieldsArray = fields()
				.add(0).add(1, 0).add(2, 0).add(3, 0).add(4, 0);
			fieldsArray[1].creature = creatures.troll;
			fieldsArray[2].creature = creatures.wardrak;
			fieldsArray[3].creature = creatures.skral;
			fieldsArray[4].creature = creatures.gor;

			movement.next(fieldsArray);
			expect(fieldsArray[0].creatures[0]).toEqual(creatures.gor);
			expect(fieldsArray[0].creatures[1]).toEqual(creatures.skral);
			expect(fieldsArray[0].creatures[2]).toEqual(creatures.wardrak);
			expect(fieldsArray[0].creatures[3]).toEqual(creatures.troll);

		})

		it("should move wardraks twice per turn", function () {
			var fieldsArray = fields()
				.add(0).add(1, 0).add(2, 1).add(3, 2);
			fieldsArray[3].creature = creatures.wardrak;
			movement.next(fieldsArray);
			expect(fieldsArray[1].creature).toEqual(creatures.wardrak);
			expect(fieldsArray[2].creature).toBeUndefined()
			expect(fieldsArray[3].creature).toBeUndefined()
		})



		it("should jump over fields containing already a creature", function () {
			var fieldsArray = fields()
				.add(0).add(1, 0).add(2, 1).add(3, 2).add(4, 2);
			fieldsArray[3].creature = creatures.gor;
			fieldsArray[4].creature = creatures.skral;
			movement.next(fieldsArray);
			expect(fieldsArray[1].creature).toEqual(creatures.skral);
			expect(fieldsArray[2].creature).toEqual(creatures.gor);
		})


	});




});
