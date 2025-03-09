import { useTranslations as useIntlTranslations } from "next-intl";
import defaultMessages from "@/i18n/locales/en.json";

function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

export function useTranslations() {
  const t = useIntlTranslations();
  return (namespace) => {
    const translated = t(namespace);
    return translated !== namespace ? translated : getNestedValue(defaultMessages, namespace) || namespace;
  };
}
