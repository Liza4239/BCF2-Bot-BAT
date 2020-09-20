const { bot } = require('../../configs/telegram/bot');

const getChatId = async (chatUsername) => {
    const { id: chat_id } = await bot.telegram.getChat(chatUsername);
    return chat_id;
};

module.exports = {
    getChatId
};