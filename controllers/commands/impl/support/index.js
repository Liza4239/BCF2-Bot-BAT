const {
    bot,
    link,
} = require('../../../../configs/telegram/bot');

const { msg } = require('./config');
const { visitor } = require('../../../../configs/google/analytics');

bot.command('support',
    ctx => {
        visitor
            .event(link, "Click Slash Command", "/support")
            .send();
        ctx.reply(msg)
    });