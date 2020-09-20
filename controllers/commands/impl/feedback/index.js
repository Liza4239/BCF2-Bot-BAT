const {
    bot,
    link,
} = require('../../../../configs/telegram/bot');

const { msg } = require('./config');
const { visitor } = require('../../../../configs/google/analytics');

bot.command('feedback',
    ctx => {
        visitor
            .event(link, "Click Slash Command", "/feedback")
            .send();
        ctx.reply(msg)
    });