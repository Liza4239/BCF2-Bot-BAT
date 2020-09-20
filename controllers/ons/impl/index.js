const { bot } = require('../../../configs/telegram/bot');

bot.on('message',

    ctx => {
       
        ctx.reply(ctx.update.message.text);
    });