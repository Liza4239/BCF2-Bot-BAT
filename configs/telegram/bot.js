const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const Markup = require('telegraf/markup');

const config = {
    port: process.env.PORT,
    link: process.env.BOT_LINK,
    token: process.env.BOT_TOKEN,
};

/* Initializing the telegram bot */
const bot = new Telegraf(config.token);

module.exports = {
    // Export the bot configurations
    bot,
    ...config,
    // Export the libraries
    Extra,
    Markup,
    Telegraf
};