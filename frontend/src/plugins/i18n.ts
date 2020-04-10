import Vue from 'vue';
import VueI18n from 'vue-i18n';

// Internationalization (i18n)
import de from '../assets/translation/de';
import en from '../assets/translation/en';

Vue.use(VueI18n);

const messages = {
    de,
    en
};

const DEFAULT_LANGUAGE = 'de';
const NAVIGATIOR_LANGUAGE_SHORT = navigator.language.slice(0, 2);
// Create VueI18n instance with options
export default new VueI18n({
    // Check navigator language exists in translations, otherwise en is set
    // locale: Object.keys(messages).some((l) => l === NAVIGATIOR_LANGUAGE_SHORT)
    //     ? NAVIGATIOR_LANGUAGE_SHORT
    //     : DEFAULT_LANGUAGE,
    locale: DEFAULT_LANGUAGE,
    messages // set locale messages
});
