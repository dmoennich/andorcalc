var createFields = function () {
	var fields = [];
	fields.size = 0;
	fields.add = function (number, ancestor) {
		var newField = {
			number: number
		};
		if (ancestor) {
			newField.ancestor = ancestor;
		}
		fields[number] = newField;
		fields.size += 1;
		return fields;
	};
	return fields;
};

module.exports = createFields;


var andorMainFields = createFields();
//andorMainFields
//	.add(0)
//	.add(1, 0)
//	.add(3, 1)
//	.add(10, 3)
//	.add(19, 3)
//	.add(22, 19)
//	.add()
//	.add()
//	.add()
//	.add()
//	.add();

