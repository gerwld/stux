"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import { Link } from "@/i18n";
import { usePathname } from "next/navigation";
import { Product, products } from "@/app/[locale]/products/preloaded";
import { useTranslations } from "next-intl";

type Link = {
  href: string;
  title: string;
  n18?: string;
};

const Footer: React.FC<{ productAlias?: Product["alias"] }> = ({ productAlias }) => {
  const t = useTranslations("Footer");
  const ITEM = products.find(p => p.alias === productAlias);
  const menuLinks = ITEM?.details.linksExtras;
  const m = menuLinks;
  const route = usePathname();

  const [links] = useState<Link[]>([ // weak typisation to fallback the non-existing links with universal ones
    { href: (m?.github || "https://github.com/gerwld/"), title: "Github" },
    { href: (m?.releases || "#"), title: "Releases", n18: "releases" },
    { href: (m?.contribute || "https://github.com/gerwld/spoplus-extension/blob/main/CONTRIBUTING.md"), title: "Contribute", n18: "contribute" },
    { href: (m?.bug_report || m?.feature_request || "https://docs.google.com/forms/d/e/1FAIpQLSfs7hCNix98qt70fx_dhhBSF309hn5WBcavb2H_dMZgeT3CHg/viewform?usp=dialog"), title: "Bug Report", n18: "bug_report" },
  ]);
  return (
    <footer className={style.footer}>
      <div className={`content_wrapper ${style.footer_content}`}>
        <nav className={style.nav}>
          {links.map((link) => (
            <Link
              target="_blank"
              key={link.href + link.title}
              href={link.href}
              className={route == link.href ? style.active : ""}
            >
              {link.n18 ? t(link.n18) : link.title}
            </Link>
          ))}
        </nav>

        <div className={style.credentials}>
          <span>
            Made with
            <img title="Heart Icon" src="/icons/heart.svg" alt=" love " />
            by
          </span>
          <Link target="_blank" href="http://github.com/gerwld">Patryk Jaworski</Link> and{" "}
          <a>keyxnode</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
