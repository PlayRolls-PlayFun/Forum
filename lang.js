// Переводы для сайта
const translations = {
    ru: {
        // Навигация
        home: "Главная",
        terms: "Условия",
        termsLong: "Условия использования",
        privacy: "Политика конфиденциальности",
        nextArticle: "Следующая статья",
        nextTopic: "Следующая тема",
        
        // Общие
        author: "Автор",
        discussion: "Обсуждение",
        comments: "Комментарии:",
        addComment: "Добавить комментарий:",
        submit: "Отправить",
        allRights: "Все права защищены PlayRolls",
        copyright: "© 2025 PlayRolls. Все права защищены.",
        
        // Заголовки страниц
        termsTitle: "Условия использования",
        privacyTitle: "Политика конфиденциальности",
        gameDevTitle: "Как начать разработку игры",
        logoTitle: "Как создать логотип для игры",
        
        // Index.html - Правообладание
        indexH2: "Правообладание",
        indexP1: "Все материалы, размещенные на сайте, включая, но не ограничиваясь, логотипами, текстами, изображениями, графикой, звуками и видео, являются собственностью компании PlayRolls и ее партнера PlaySet.",
        indexH3_1: "Права на контент",
        indexP2: "Вся интеллектуальная собственность, размещенная на сайте, включая лого, графику, дизайны, тексты, изображения, а также другие элементы, принадлежат компании PlayRolls и PlaySet. Использование этих материалов без разрешения владельцев запрещено.",
        indexH3_2: "Запрещенное использование",
        indexP3: "Любое использование логотипов, контента, брендов и материалов, размещенных на этом сайте, в любых целях, включая коммерческое использование, копирование, распространение или модификацию, без письменного согласия владельцев, является нарушением закона.",
        indexH3_3: "Ответственность",
        indexP4: "Компания PlayRolls не несет ответственности за использование материалов сайта третьими лицами без разрешения. Мы оставляем за собой право предпринимать юридические действия в случае нарушения наших прав.",
        indexH3_4: "Согласие",
        indexP5: "Используя этот сайт, вы соглашаетесь с условиями, изложенными в данном документе, и подтверждаете, что обязуетесь соблюдать все указанные правила и положения.",
        
        // Terms.html
        termsH2: "Условия использования форума PlayFun",
        termsP1: "Добро пожаловать на форум PlayFun, принадлежащий компании PlayRolls (далее \"Сайт\" или \"Форум\"). Используя данный форум, вы соглашаетесь с настоящими условиями использования. Если вы не согласны с ними, пожалуйста, не используйте форум PlayFun.",
        termsH3_1: "1. Общие положения",
        termsP2: "Форум PlayFun и все его материалы принадлежат компании PlayRolls. Все права на контент, включая текст, изображения, графику, логотипы, программное обеспечение и другие элементы, защищены законами об авторском праве.",
        termsH3_2: "2. Лицензия на использование контента",
        termsP3: "Компания PlayRolls предоставляет вам ограниченную, неисключительную лицензию на доступ и использование материалов форума только для личных, некоммерческих целей. Вы не имеете права копировать, изменять, распространять, продавать или использовать материалы форума без явного разрешения компании PlayRolls.",
        termsH3_3: "3. Ответственность пользователей",
        termsP4: "Вы обязуетесь не нарушать законы и не использовать форум для незаконных или вредоносных действий. Запрещено:",
        termsLi1: "Использовать форум для распространения вирусов или другого вредоносного программного обеспечения.",
        termsLi2: "Публиковать на форуме контент, нарушающий авторские права или интеллектуальную собственность третьих лиц.",
        termsLi3: "Использовать форум для спама или рассылки непрошенных сообщений.",
        termsH3_4: "4. Регистрация и безопасность",
        termsP5: "Для использования некоторых функций форума, таких как оставление комментариев или регистрация, может потребоваться создание аккаунта. Вы обязуетесь предоставлять точную и актуальную информацию при регистрации и обновлять её по мере необходимости. Вы несете ответственность за безопасность вашего аккаунта и пароля.",
        termsH3_5: "5. Оговорки о гарантии",
        termsP6: "Форум PlayFun и его материалы предоставляются \"как есть\", и мы не даем никаких гарантий относительно их точности, полноты или надежности. Мы не несём ответственности за любые убытки, связанные с использованием форума.",
        termsH3_6: "6. Прекращение доступа",
        termsP7: "Компания PlayRolls имеет право приостановить или прекратить ваш доступ к форуму в любое время, если вы нарушаете условия использования или если это требуется для обеспечения безопасности или работы форума.",
        termsH3_7: "7. Изменения условий",
        termsP8: "Мы оставляем за собой право изменять эти условия в любое время. Все изменения вступают в силу с момента их публикации на этом сайте. Рекомендуем вам регулярно проверять эту страницу на наличие изменений.",
        termsH3_8: "8. Применимое законодательство",
        termsP9: "Настоящие условия регулируются и толкуются в соответствии с законодательством вашей страны. Все споры, возникшие в связи с использованием форума, подлежат рассмотрению в соответствующих судах.",
        termsH3_9: "9. Контактная информация",
        termsP10: "Если у вас есть вопросы или предложения по поводу условий использования форума PlayFun, вы можете связаться с нами:",
        termsLi4: "Электронная почта: playrollsplayfun@gmail.com",
        
        // Privacy.html
        privacyH2: "Политика конфиденциальности компании PlayRolls",
        privacyP1: "Компания PlayRolls (далее \"Мы\", \"Наши\", \"Нас\") заботится о конфиденциальности и безопасности данных наших пользователей. Настоящая Политика конфиденциальности объясняет, какие данные мы собираем, как мы их используем и как защищаем ваши данные.",
        privacyH3_1: "1. Собираемые данные",
        privacyP2: "Мы можем собирать личные данные, которые вы предоставляете нам при регистрации на сайте или взаимодействии с форумом. Это могут быть следующие данные:",
        privacyLi1: "Имя и фамилия",
        privacyLi2: "Адрес электронной почты",
        privacyLi3: "Сообщения и комментарии, оставленные на форуме",
        privacyLi4: "Данные, предоставленные через форму обратной связи",
        privacyH3_2: "2. Использование данных",
        privacyP3: "Мы используем ваши данные для следующих целей:",
        privacyLi5: "Для обработки ваших запросов и комментариев.",
        privacyLi6: "Для улучшения качества предоставляемых услуг на нашем сайте.",
        privacyLi7: "Для связи с вами по поводу важных обновлений, связанных с вашим аккаунтом.",
        privacyLi8: "Для анализа статистики и улучшения работы сайта.",
        privacyH3_3: "3. Защита данных",
        privacyP4: "Мы прилагаем все усилия для защиты ваших данных и предотвращения несанкционированного доступа, изменения или удаления. Однако, важно понимать, что передача данных через интернет не может быть полностью безопасной, и мы не можем гарантировать абсолютную безопасность.",
        privacyH3_4: "4. Раскрытие данных",
        privacyP5: "Мы не передаем ваши личные данные третьим лицам, за исключением случаев, когда это необходимо для выполнения юридических обязательств или в случае расследования нарушений безопасности.",
        privacyH3_5: "5. Использование cookies",
        privacyP6: "Наш сайт может использовать файлы cookie для улучшения работы. Cookies позволяют нам собирать информацию о вашем браузере, устройстве и действиях на сайте, чтобы предложить вам более персонализированный опыт.",
        privacyH3_6: "6. Изменения в политике",
        privacyP7: "Мы оставляем за собой право изменять настоящую политику конфиденциальности в любое время. Изменения вступают в силу с момента их публикации на сайте. Рекомендуем вам периодически проверять данную страницу на предмет обновлений.",
        privacyH3_7: "7. Ваши права",
        privacyP8: "Вы имеете право запросить доступ к своим личным данным, их исправление или удаление. Для этого свяжитесь с нами по контактной информации, указанной ниже.",
        privacyH3_8: "8. Контактная информация",
        privacyP9: "Если у вас есть вопросы о нашей политике конфиденциальности, вы можете связаться с нами:",
        privacyLi9: "Электронная почта: playrollsplayfun@gmail.com",
        
        // Post 1
        post1Text: "Здесь обсуждаем, с чего начать и какие шаги нужно предпринять для начала разработки игры.",
        post1Comment1: "Для начала нужно выбрать движок для игры. Unity или Unreal Engine — это отличные варианты для начинающих.",
        post1Comment2: "Я бы посоветовала изучить C# для Unity, это поможет вам создавать игровые механики.",
        
        // Post 2
        post2Text: "Какие инструменты лучше использовать для создания логотипа и как выбрать стиль.",
        post2Comment1: "Я использую Photoshop и Illustrator для создания логотипов. Это самые мощные инструменты для дизайна.",
        post2Comment2: "Для более простых логотипов подойдут и бесплатные инструменты, такие как GIMP или Inkscape."
    },
    en: {
        // Navigation
        home: "Home",
        terms: "Terms",
        termsLong: "Terms of Use",
        privacy: "Privacy Policy",
        nextArticle: "Next Article",
        nextTopic: "Next Topic",
        
        // General
        author: "Author",
        discussion: "Discussion",
        comments: "Comments:",
        addComment: "Add Comment:",
        submit: "Submit",
        allRights: "All rights reserved PlayRolls",
        copyright: "© 2025 PlayRolls. All rights reserved.",
        
        // Page titles
        termsTitle: "Terms of Use",
        privacyTitle: "Privacy Policy",
        gameDevTitle: "How to Start Game Development",
        logoTitle: "How to Create a Game Logo",
        
        // Index.html - Copyright
        indexH2: "Copyright",
        indexP1: "All materials posted on the site, including but not limited to logos, texts, images, graphics, sounds and videos, are the property of PlayRolls and its partner PlaySet.",
        indexH3_1: "Content Rights",
        indexP2: "All intellectual property posted on the site, including logos, graphics, designs, texts, images, and other elements, belong to PlayRolls and PlaySet. Use of these materials without the permission of the owners is prohibited.",
        indexH3_2: "Prohibited Use",
        indexP3: "Any use of logos, content, brands and materials posted on this site for any purpose, including commercial use, copying, distribution or modification, without the written consent of the owners, is a violation of the law.",
        indexH3_3: "Liability",
        indexP4: "PlayRolls and PlaySet are not responsible for the use of site materials by third parties without permission. We reserve the right to take legal action in case of violation of our rights.",
        indexH3_4: "Consent",
        indexP5: "By using this site, you agree to the terms set forth in this document and confirm that you undertake to comply with all the rules and regulations specified.",
        
        // Terms.html
        termsH2: "PlayFun Forum Terms of Use",
        termsP1: "Welcome to the PlayFun forum, owned by PlayRolls (hereinafter \"Site\" or \"Forum\"). By using this forum, you agree to these terms of use. If you do not agree with them, please do not use the PlayFun forum.",
        termsH3_1: "1. General Provisions",
        termsP2: "The PlayFun forum and all its materials belong to PlayRolls and its partner PlaySet. All rights to content, including text, images, graphics, logos, software and other elements, are protected by copyright laws.",
        termsH3_2: "2. Content Use License",
        termsP3: "PlayRolls grants you a limited, non-exclusive license to access and use forum materials for personal, non-commercial purposes only. You may not copy, modify, distribute, sell or use forum materials without the express permission of PlayRolls.",
        termsH3_3: "3. User Responsibility",
        termsP4: "You agree not to violate laws and not to use the forum for illegal or malicious activities. It is prohibited:",
        termsLi1: "Use the forum to distribute viruses or other malicious software.",
        termsLi2: "Post content on the forum that violates copyright or intellectual property of third parties.",
        termsLi3: "Use the forum for spam or sending unsolicited messages.",
        termsH3_4: "4. Registration and Security",
        termsP5: "To use some forum features, such as leaving comments or registration, you may need to create an account. You agree to provide accurate and current information during registration and update it as necessary. You are responsible for the security of your account and password.",
        termsH3_5: "5. Warranty Disclaimers",
        termsP6: "The PlayFun forum and its materials are provided \"as is\", and we make no warranties regarding their accuracy, completeness or reliability. We are not responsible for any losses associated with the use of the forum.",
        termsH3_6: "6. Termination of Access",
        termsP7: "PlayRolls has the right to suspend or terminate your access to the forum at any time if you violate the terms of use or if it is required to ensure the security or operation of the forum.",
        termsH3_7: "7. Changes to Terms",
        termsP8: "We reserve the right to change these terms at any time. All changes take effect from the moment they are published on this site. We recommend that you regularly check this page for changes.",
        termsH3_8: "8. Applicable Law",
        termsP9: "These terms are governed by and construed in accordance with the laws of your country. All disputes arising in connection with the use of the forum are subject to consideration in the appropriate courts.",
        termsH3_9: "9. Contact Information",
        termsP10: "If you have questions or suggestions regarding the terms of use of the PlayFun forum, you can contact us:",
        termsLi4: "Email: playrollsplayfun@gmail.com",
        
        // Privacy.html
        privacyH2: "PlayRolls Privacy Policy",
        privacyP1: "PlayRolls (hereinafter \"We\", \"Our\", \"Us\") cares about the privacy and security of our users' data. This Privacy Policy explains what data we collect, how we use it and how we protect your data.",
        privacyH3_1: "1. Data Collected",
        privacyP2: "We may collect personal data that you provide to us when registering on the site or interacting with the forum. This may include the following data:",
        privacyLi1: "First and last name",
        privacyLi2: "Email address",
        privacyLi3: "Messages and comments left on the forum",
        privacyLi4: "Data provided through the feedback form",
        privacyH3_2: "2. Data Usage",
        privacyP3: "We use your data for the following purposes:",
        privacyLi5: "To process your requests and comments.",
        privacyLi6: "To improve the quality of services provided on our site.",
        privacyLi7: "To contact you about important updates related to your account.",
        privacyLi8: "For statistical analysis and site improvement.",
        privacyH3_3: "3. Data Protection",
        privacyP4: "We make every effort to protect your data and prevent unauthorized access, modification or deletion. However, it is important to understand that data transmission over the Internet cannot be completely secure, and we cannot guarantee absolute security.",
        privacyH3_4: "4. Data Disclosure",
        privacyP5: "We do not transfer your personal data to third parties, except when it is necessary to fulfill legal obligations or in case of investigation of security violations.",
        privacyH3_5: "5. Use of Cookies",
        privacyP6: "Our site may use cookies to improve performance. Cookies allow us to collect information about your browser, device and actions on the site to offer you a more personalized experience.",
        privacyH3_6: "6. Policy Changes",
        privacyP7: "We reserve the right to change this privacy policy at any time. Changes take effect from the moment they are published on the site. We recommend that you periodically check this page for updates.",
        privacyH3_7: "7. Your Rights",
        privacyP8: "You have the right to request access to your personal data, its correction or deletion. To do this, contact us using the contact information below.",
        privacyH3_8: "8. Contact Information",
        privacyP9: "If you have questions about our privacy policy, you can contact us:",
        privacyLi9: "Email: playrollsplayfun@gmail.com",
        
        // Post 1
        post1Text: "Here we discuss where to start and what steps to take to begin game development.",
        post1Comment1: "First, you need to choose a game engine. Unity or Unreal Engine are great options for beginners.",
        post1Comment2: "I would recommend learning C# for Unity, it will help you create game mechanics.",
        
        // Post 2
        post2Text: "What tools are best to use for creating a logo and how to choose a style.",
        post2Comment1: "I use Photoshop and Illustrator to create logos. These are the most powerful design tools.",
        post2Comment2: "For simpler logos, free tools like GIMP or Inkscape will work."
    }
};

// Получить текущий язык из localStorage или установить по умолчанию
let currentLang = localStorage.getItem('language') || 'ru';

// Функция переключения языка
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    updatePageContent();
    updateActiveButton();
}

// Обновление содержимого страницы
function updatePageContent() {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // Обновить атрибут lang в HTML
    document.documentElement.lang = currentLang;
}

// Обновление активной кнопки языка
function updateActiveButton() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang-btn="${currentLang}"]`)?.classList.add('active');
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    updatePageContent();
    updateActiveButton();
});

