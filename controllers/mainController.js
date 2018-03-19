var express = require("express");

var project = require("../models/portfolioData.js");

var router = express.Router();

router.get("/", function(req, res) {

	res.sendFile(path.join(__dirname, "index.html"));

});

router.get("/api/projects/:requested", function(req, res) {

	var projectReq;

	console.log(req.params.requested);

	for (var i = 0; i < project.length; i++) {

		if (req.params.requested === project[i].id) {

			projectReq = project[i];

		}

	}

	console.log(projectReq);

	res.json(projectReq);



});

module.exports = router;