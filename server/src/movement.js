var creatures = require("./creatures"),
	movement = {};



movement.next = function (fieldsArray) {

	var addCreatureToRootField = function (fieldNumber, creature) {
		var rootField = fieldsArray[fieldNumber];
		rootField.creatures = rootField.creatures || [];
		rootField.creatures.push(creature);
	};

	var move = function (fieldNumber, creature) {
		if (fieldsArray[fieldNumber].ancestor === undefined) {
			return addCreatureToRootField(fieldNumber, creature);
		}
		if (fieldsArray[fieldNumber].creature) {
			return move(fieldsArray[fieldNumber].ancestor, creature);
		}
		fieldsArray[fieldNumber].creature = creature;
	};

	creatures.forEach(function (creature) {
		fieldsArray.forEach(function (field) {
			if (field.creature === creature) {
				move(field.ancestor, field.creature);
				delete field.creature;
			}
		});
	});



};



module.exports = movement;



