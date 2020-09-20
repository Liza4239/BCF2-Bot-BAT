const { bot } = require('../../configs/telegram/bot');

const { getChatId } = require('./getters');

const sendMsg = ({ username, chatUsername, text }) => {
    (async () => {
        /* Get chat id by username */
        const chatId = await getChatId(chatUsername);
        /* Send message to the chat */
        await bot.telegram
            .sendMessage(
                chatId,
                text,
                { parse_mode : "Markdown" }
            );
    })();
};

module.exports = {
    sendMsg,
};