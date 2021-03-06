import nodemailer from 'nodemailer';

const config = process.configs.mail;

export default function sendMail(
	mail: string,
	aliasName: string,
	to: string,
	subject: string,
	textBody: string,
	htmlBody?: string
) {
	if (config) {
		if (!config.host) {
			throw new Error('Mail host is not defined');
		}

		if (!config.port) {
			throw new Error('Mail port is not defined');
		}

		if (!config.accounts) {
			throw new Error('Mail accounts not found in mail config');
		}
	} else {
		throw new Error('Mail config not found');
	}

	if (config.enabled) {
		const account = config.accounts[mail];

		let fromMail = mail;
		if (aliasName) fromMail = `"${aliasName}" <${mail}>`;

		if (account) {
			try {
				const transporter = nodemailer.createTransport({
					host: config.host,
					port: config.port,

					secure: config.secure,
					tls: {
						rejectUnauthorized: config.rejectUnauthorized,
					},

					auth: {
						user: account.username,
						pass: account.password,
					},
				});

				transporter.sendMail({
					from: fromMail,
					to,
					subject,
					text: textBody,
					html: htmlBody,
				});
			} catch (error) {
				throw new Error('Could not send mail');
			}
		} else {
			throw new Error(`Could not find mail '${mail}'`);
		}
	} else {
		throw new Error('Mail is not enabled, you can enabled it in the project mail config file.');
	}
}
