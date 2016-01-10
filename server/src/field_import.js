var fields = require("./fields"),
	fieldImport = {};


var fillArray = function (ancestorNumber, descendants, fieldsArr) {
	if (!descendants) {
		return;
	}
	descendants.forEach(function (descendant) {
		fieldsArr.add(descendant.number, ancestorNumber);
		if (descendant.descendants) {
			fillArray(descendant.number, descendant.descendants, fieldsArr);
		}
	});
};


/**
 * Transforms json fields to array of fields.
 * @param absolute path of json file containing field data
 */
fieldImport.import = function (fileName) {
	var fieldData = require(fileName),
		fieldsArray = fields();
	fillArray(fieldData.number, fieldData.descendants, fieldsArray);
	return fieldsArray;
};

module.exports = fieldImport;
