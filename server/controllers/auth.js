const jwt = require("jsonwebtoken");

const url = require("url");

const User = require("../model/user");

const BadRequest = require("../errors/bad-request");

const transproter = require("../utils/email-transporter");

const secret = process.env.SECTRET_STRING;

exports.PostSignUp = async (req, res, next) => {
	const { name, email, password, confirmPassword } = req.body;

	const veriviationCode = Math.floor(
		Math.random() * 10000 * Date.now()
	).toString(16);

	const user = new User({
		name: name,
		email: email,
		password: password,
		verification: {
			verified: false,
			verificationCode: veriviationCode,
		},
	});

	try {
		await user.save();

		transproter.sendMail({
			to: email,
			from: "ahmed.mamdouh7548@gmail.com",
			subject: "verify your acount",
			html: `<p>click on this <a href="http://localhost:3000/auth/verify?userId=${user._id}&code=${veriviationCode}">link</a> to change your password</p>`,
		});

		return res
			.status(200)
			.json({ msg: "user signed up successfuly successfully" });
	} catch (err) {
		if (err.code && err.code === 11000) {
			return next(
				new BadRequest(`there is an acount with that title already exists`),
				req,
				res,
				next
			);
		}
		next(err, req, res, next);
	}
};

exports.verifyAcount = async (req, res, next) => {
	const { userId, code } = req.query;

	try {
		const user = await User.findById(userId);

		if (user.verification.verificationCode === code) {
			user.verification.verified = true;
			

			await user.save();

			res.redirect("/");
		}
	} catch (err) {
		next(err, req, res, next);
	}
};

/* json web token is created here and sent to the client */
exports.postLogin = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email: email });
		if (!user)
			return res
				.status(404)
				.json({ error: "404", msg: "there is no such user" });

		const validPassword = await user.checkPassword(password);

		//wrong password
		if (user.status === "SUSPENDED")
			res.status(403).json({ error: "403", msg: "this acount is suspended" });
		if (!validPassword)
			return res
				.status(403)
				.json({ error: "403", msg: "user entered a wrong password" });
		if (user.status === "INACTIVE_ACOUNT")
			res.status(403).json({ error: "403", msg: "this acount is inactivated" });
		const token = jwt.sign(
			{
				userName: user.name,
				role: user.role,
				email: user.email,
				userId: user._id,
			},
			secret
		);
		res.status(200).json({
			jsonToken: token,
			user: {
				email: user.email,
				name: user.name,
				// -->we can add a user image url
			},
		});
	} catch (err) {
		console.log(err);
	}
};

exports.activateAccount = async (req, res, next) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email: email });
		if (!user)
			return res
				.status(404)
				.json({ error: "404", msg: "there is no such user" });

		const validPassword = await user.checkPassword(password);

		//wrong password
		if (user.status === "SUSPENDED")
			res.status(403).json({ error: "403", msg: "this acount is suspended" });
		if (!validPassword)
			return res
				.status(403)
				.json({ error: "403", msg: "user entered a wrong password" });

		user.status = "ACTIVE";
		await user.save();
		const token = jwt.sign(
			{
				userName: user.name,
				role: user.role,
				email: user.email,
				userId: user._id,
			},
			secret
		);
		res.status(200).json({
			jsonToken: token,
			user: {
				email: user.email,
				name: user.name,
				// -->we can add a user image url
			},
		});
	} catch (err) {
		next(err, req, res, next);
	}
};
