var express = require("express"),
	router = express.Router(),
	path = require("path"),
	fields = {};

module.exports = router;

fields.main = require("../../public/data/fields/fields_main.json");

router.use(require("morgan")("dev"));

router.use(express.static(path.join(__dirname, "../../public")));
router.use(express.static(path.join(__dirname, "../../node_modules")));

router.get("/", function (req, resp) {
	resp.sendFile(path.join(__dirname, "../../browser/index.html"));
});

router.get("/fields/:fieldsName", function (req, resp, next) {
	var reqFields = fields[req.params.fieldsName];
	if (reqFields) {
		resp.json(reqFields);
	} else {
		resp.status(404);
		next("Fields " + req.params.fieldsName + " not found");
	}
});

