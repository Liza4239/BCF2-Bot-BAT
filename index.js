const axios = require('axios');

/* Import application configurations */
const {
    mode,
    platform
} = require('./configs/application');

/* Read environment config variables */
switch (mode) {
    case 'development':
        require('dotenv')
            .config({ path: __dirname + '/environment/development/.env' });
        break;

    case 'production':
        require('dotenv')
            .config({ path: __dirname + '/environment/production/.env' });
        break;

    default:
        console.error("Defined unknown application mode. Available: development/production");
        break;
}

/* Import bot configurations */
const {
    bot,
    port,
    token
} = require('./configs/telegram/bot');

/* Import heroku configurations */
const { url } = require('./configs/heroku');

/* Import telegram /commands module */
require('./controllers/commands');

/* Import telegram user-actions module */
require('./controllers/actions');

/* Import telegram user-actions module */
require('./controllers/ons');

bot.catch(
    (err, ctx) => console.log(`Encountered an error: ${ctx.updateType}`, err));

/* Log current application state mode */
console.log(`Defined application mode: ${mode}`);

/* Implement the production */
switch (platform) {
    case 'heroku':
        console.log("Defined production platform - Heroku.");
        if (mode === 'production') {
            bot.telegram.setWebhook(`${url}/bot${token}`);
            bot.startWebhook(`/bot${token}`, null, port);
        } else
            console.error("Cannot start bot on Heroku platform with development mode");
        break;

    case 'localhost':
        console.log("Defined production platform - Localhost. Automatic mode - development.");
        (async () => {
            const response = await axios.get(`https://api.telegram.org/bot${token}/deleteWebhook`);
            if (response.data.ok) {
                console.log("Webhook was successfully removed.");
                bot.startPolling();
            } else
                console.log("Webhook was failed to be removed. Cannot start development mode.");
        })();
        break;

    default:
        console.error("Production platform is unknown or undefined.");
        break;
}