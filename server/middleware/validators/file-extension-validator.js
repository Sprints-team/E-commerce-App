
const fileExtensionValidator = (req, res, next) => {
	if (req.rightExtension===false) {
		return res.status(400).json({ error: "400", msg: "only allow image file formats" });
	}

	if ((!req.files || req.files.length === 0) && !req.file) {
		return res.status(400).json({ error: "400", msg: "no files were sent" });
	}
	next();
};

module.exports = fileExtensionValidator;
