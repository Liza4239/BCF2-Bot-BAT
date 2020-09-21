const {
    bot,
    link,
    Extra
} = require('../../../../../configs/telegram/bot');

const {
    msgStart,
    msgVacanciesForStudents,
    msgVacanciesForGraduates
} = require('./config');

const { visitor } = require('../../../../../configs/google/analytics');




bot.action("ActionHandlerVacanciesForStudents",
    ctx => {
        visitor
            .event(link, "Click Action", "/vacancies-for-students")
            .send();
        ctx.editMessageText(
            msgVacanciesForStudents,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.urlButton(
                            'Детальніше тут:',
                            'https://careers.bat.com/content/Global-Interns/?locale=en_GB'
                        )
                    ],
                    [
                        m.callbackButton(
                            '🔙 До головного меню',
                            'ActionHandlerBack'
                        )
                    ]
                ])
            )
        );
    });

bot.action("ActionHandlerVacanciesForGraduates",
    ctx => {
        visitor
            .event(link, "Click Action", "/vacancies-for-graduates")
            .send();
        ctx.editMessageText(
            msgVacanciesForGraduates,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.urlButton(
                            'Детальніше про програму👇🏻',
                            'https://careers.bat.com/content/Early-Careers/?locale=en_GB'
                        ),
                    ],
                    [
                        m.urlButton(
                            'Відгукуйся тут👇🏻',
                            'https://m.rabota.ua/vacancy/view/6081013'
                        )
                    ],
                    [
                        m.callbackButton(
                            '🔙 До головного меню',
                            'ActionHandlerBack'
                        )
                    ]
                ])
            )
        );
    });


bot.action('ActionHandlerBack',
ctx => {
    visitor
        .event(link, "Click Slash Command", "/start")
        .send();
    ctx.editMessageText(
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


