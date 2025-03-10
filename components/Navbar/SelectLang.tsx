"use client"
import React from "react";
import { usePathname, useRouter } from "next/navigation"; 
import { useLocale } from "next-intl";
import clsx from "clsx";
import style from './style.module.css';


const SelectLang: React.FC = () => {
  
  const route = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const pathWithoutLocale = route.split('/').slice(2).join('/');
    const newPath = `/${newLocale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ''}`;
    router.push(newPath);
  };

  return (
    <div className={clsx("lang_select", style.lang_left)}>
      <div className="lang_set_wrapper">
        <select
          className="btn_header lang_set emojiesfix"
          name="lang_set"
          id="lang_set"
          value={currentLocale}
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="pl">Polish - polski</option>
          <option value="fr">French - français</option>
          <option value="sp">Spanish - español</option>
          <option value="de">German - Deutsch</option>
          <option value="nl">Dutch - Nederlands</option>
          <option value="uk">Ukrainian - українська</option>
          <option value="be">Belarusian - беларуская</option>
          <option value="ru">Rusian - русский</option>
          <option value="pt">Portuguese - português</option>
          <option value="hi">Hindi - हिन्दी</option>
          <option value="sv">Swedish - svenska</option>
          <option value="ar">Arabic - العربية</option>
          <option value="ja">Japanese - 日本語 (Nihongo)</option>
          <option value="zh">Chinese - 中文 (Zhōngwén)</option>
        </select>
        <div className="lang_ic"></div>
      </div>
      </div>
  );
};

export default SelectLang;