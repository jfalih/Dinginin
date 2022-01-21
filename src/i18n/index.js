import I18n from "react-native-i18n";
import idLocale from './locales/idLocale/index';
import enLocale from './locales/enLocale/index';

I18n.fallbacks = true;
I18n.locale = 'id';
I18n.translations = {
  id: idLocale,
  en: enLocale
};
export default I18n;