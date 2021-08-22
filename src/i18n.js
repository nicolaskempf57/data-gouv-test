import {createI18n} from "vue-i18n";
import fr from "./translations/fr";

export default createI18n({
    legacy: false,
    locale: 'fr',
    messages: {
        fr,
    }
})