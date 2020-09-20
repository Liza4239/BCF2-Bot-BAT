const {
    bot,
    link,
    Extra
} = require('../../../../configs/telegram/bot');

const { visitor } = require('../../../../configs/google/analytics');
const { msgStart } = require('./config');

bot.command('start',
    ctx => {
        visitor
            .event(link, "Click Slash Command", "/start")
            .send();
        ctx.reply(
            msgStart,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.urlButton(
                            'Більше про нас',
                            'http://www.bat.ua/'
                        ),
                        m.urlButton(
                            "Наші вакансії",
                            "https://m.rabota.ua/company/view/771"
                        )
                    ],
                    [
                        m.callbackButton(
                            "Можливості для студентів",
                            "ActionHandlerVacanciesForStudents"
                        ),
                    ],
                    [
                        m.callbackButton(
                            "Можливості для випускників",
                            "ActionHandlerVacanciesForGraduates"
                        )
                    ],
                    [
                        m.urlButton(
                            "Поспілкуватись з представником ВАT",
                            "https://t.me/radanata"
                        )
                    ]
                ])
            )
        )
    });
