const deleteImage = require("../../helpers/deleteImages");

const fileExtensionValidator = (req, res, next) => {
	if (req.rightExtension===false) {
		return res.status(400).json({ error: "400", msg: "only allow image file formats" });
	}

	if ((!req.files || req.files.length === 0) && !req.file) {
		return res.status(400).json({ error: "400", msg: "no files were sent" });
	}
	// req.file = null;
	// if (
	// 	req.file &&
	// 	req.file.mimetype !== "image/png" &&
	// 	req.file.mimetype !== "image/jpeg"
	// ) {
	// 	console.log(req.file);
	// 	return res
	// 		.status(400)
	// 		.json({ error: "400", msg: "only allow image file formats" });
	// }
	// if (req.files) {
	// 	for (let file of req.files) {
	// 		if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg")
	// 			return res
	// 				.status(400)
	// 				.json({ error: "400", msg: "only allow image file formats" });
	// 	}
	// }
	next();
};

module.exports = fileExtensionValidator;
