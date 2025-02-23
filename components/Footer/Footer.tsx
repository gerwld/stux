"use client"
import React, { useState } from "react";
import style from "./style.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


type Link = {
  href: string,
  title: string,
  n18?: string
}

const Footer = () => {
  const route = usePathname();

  const [links] = useState<Link[]>([
    {href: "https://github.com", title: 'Github', n18: 'footer_home'},
    {href: "/", title: 'Releases', n18: 'footer_home'},
    {href: "/products", title: 'Contribute', n18: 'footer_home'},
    {href: "https://google.com", title: 'Bug Report', n18: 'footer_home'},
  ])
  return (    
    <footer className={style.footer}>
      <div className={`content_wrapper ${style.footer_content}`}>

      <nav className={style.nav}>
        {links.map(link => 
          <Link 
          key={link.href} 
          href={link.href}
          className={route == link.href ? style.active : ""}
          >{link.title}</Link>)}
      </nav>

      <div className={style.credentials}>
        <span>Made with
            <img title="Heart Icon" src="/icons/heart.svg" alt=" love "/>
            by
        </span>
       <Link href="/">Patryk Jaworski</Link>{" "}and{" "}<Link href="/">keyxnode</Link>
      </div>

      </div>
    </footer>
  );
};

export default Footer;
