var express = require("express"),
	router = express.Router(),
	path = require("path"),
	fields = {};

module.exports = router;

fields.main = require("../../public/data/fields/fields_main.json");

router.use(require("morgan")("dev"));

router.use(express.static(path.join(__dirname, "../../public")));

router.get("/fields/:fieldsName", function (req, resp, next) {
	var reqFields = fields[req.params.fieldsName];
	if (reqFields) {
		resp.json(reqFields);
	} else {
		resp.status(404);
		next("Fields " + req.params.fieldsName + " not found");
	}
});

