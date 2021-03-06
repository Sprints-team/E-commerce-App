const validator = (ajvValidator, params = false, query = false) => {
	return (req, res, next) => {
		if (params) {
			const valid = ajvValidator(req.params);
			if (!valid) {
				const errors = ajvValidator.errors;
				return res.status(400).json({
					error: "400",
					errors: errors.map((ele) => {
						return { msg: ele.instancePath + " " + ele.message, ele };
					}),
				});
			}
			return next();
		}
		const valid = ajvValidator({ ...req.body, ...req.query });
		if (!valid) {
			const errors = ajvValidator.errors;
			return res.status(400).json({
				error: "400",
				errors: errors.map((ele) => {
					return { msg: ele.instancePath + " " + ele.message, ele };
				}),
			});
		}
		req.body = { ...req.body, ...req.query };
		next();
	};
};

module.exports = validator;
