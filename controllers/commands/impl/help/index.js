const { bot } = require('../../../../configs/telegram/bot');
const { msgHelp } = require('./config');

bot.command('help',
    ctx => ctx.reply(msgHelp));

        

