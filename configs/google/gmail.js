const configSMTPServer = {
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    debug: true,
    logger: true,
};

const configAuth = {
    email: process.env.GMAIL_EMAIL,
    password: process.env.GMAIL_PASWORD,
};

module.exports = {
    configAuth,
    configSMTPServer,
};
