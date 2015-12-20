var createFields = function () {
	var fields = [];
	fields.add = function (number, ancestor) {
		var newField = {
			number: number,
			ancestor: ancestor
		};
		fields[number] = newField;
		return fields;
	};
	return fields;
};

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

