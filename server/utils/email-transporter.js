const nodeMailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const API_KEY=process.env.SEND_GRID_API


const transproter = nodeMailer.createTransport(sendgridTransport({
	auth: {
		api_key:API_KEY
	}
}))


module.exports=transproter