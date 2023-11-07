import i18n from "i18next";

import { initReactI18next } from "react-i18next";


i18n.use(initReactI18next).init({

    resources: {
        en: {
            translation: {
                button: "Home",
                button2: "Let's go",
                alert: 'Check your inbox or message box',
                text: "Movies, series and much more, no limits",
                text2: "Watch wherever you want. Cancel whenever you want. Want to watch? Enter your email to create or reset your subscription",
                text3: "Releases"
            },
        },

        pt: {
            translation: {
                button: 'Início',
                button2: 'Vamos lá',
                alert: 'Verifique sua caixa de mensagem',
                text: "Filmes, séries e muito mais, sem limites",
                text2: "Assista onde quiser. Cancele quando quiser. Quer assistir? Informe seu email para criar ou reiniciar sua assinatura",
                text3: "Lançamentos"
            },
        },
    },

    Lng: 'en',
    fallbackLng: 'en',

    interpolation: {
        escapeValue: false,
    }
});


export default i18n;