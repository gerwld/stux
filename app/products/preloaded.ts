"use client";
import { ColorSchemeType } from "../schemas/schemas";

export interface Product {
  logoSrc: string;
  title: string;
  desc: string;
  id: string;
  alias: string;
  version?: string;
  colorScheme?: ColorSchemeType;
  details: ProductDetails
}

export type ProductDetails = {
  id?: string,
  FIREFOX?: string,
  CHROME?: string,
  EDGE?: string,
  GITHUB?: string,
  slides_count?: number,
  available_slides_locales?: string[]
}

export const products: Product[] = [
  {
    id: "0ff399d2-9a1c-46c3-83ba-295989873",
    logoSrc: "/images/logos/igp.svg",
    alias: "IGPLUS",
    title: "IGPlus",
    version: "3.0.1 Stable",
    desc: "Disable Instagram Reels, hide Stories, recommendations  comments, trends, and other unnecessary elements, allowing you to focus on...",
    colorScheme: "PURPLE",
    details: {
      FIREFOX: "firefox-link",
      CHROME: "https://chromewebstore.google.com/detail/dbbopjndlaginbghfoibbndhlbpdpapd/",
      EDGE: "edge-link",
      slides_count: 4,
      available_slides_locales: ["en"]
    },
  },
  {
    id: "f702edcb-b036-4b2e-ab75-f11e42f1ddab",
    alias: "MEMENTO",
    logoSrc: "/images/logos/memento.svg",
    title: "Memento.",
    desc: "Customizable start page extension for browsers. Features include uploading custom backgrounds, drag-and-drop toolbar widgets.",
    details: {
      FIREFOX: "",
      CHROME: "",
      EDGE: "",
      slides_count: 4,
      available_slides_locales: ["en"]
    },
  },
  {
    id: "815f5b7f-bcd5-43f4-a5c8-6e4e95fb3fc8",
    alias: "CHESSHELPER",
    logoSrc: "/images/logos/ch.svg",
    title: "ChessHelper",
    desc: "Chess.com extension that adds new themes, pieces, boards, fonts, and features such as disabling popups,  coordinates on each square...",
    details: {
      FIREFOX: "",
      CHROME: "",
      EDGE: "",
      slides_count: 4,
      available_slides_locales: ["en"]
    },
  },
  {
    id: "6565a677-5e79-4ed2-9cd4-b8f1b15ed",
    logoSrc: "/images/logos/sp.svg",
    alias: "SPOPLUS",
    title: "SpoPlus for Spotify",
    version: "2.6.1 Stable",
    desc: 'Hide Spotify "Now Playing" View, bring back classic heart button, disable albums, change themes, fonts, disable videos to reduce bandwidth usage... ',
    colorScheme: "MAIN",
    details: {
      FIREFOX: "",
      CHROME: "",
      EDGE: "",
      slides_count: 4,
      available_slides_locales: ["en"]
    },
  },
  {
    id: "384cfb27-4606-4f38-bc9b-d608960c3cff",
    alias: "DOHABIT",
    logoSrc: "/images/logos/dh.svg",
    title: "DoHabit",
    desc: "Open-source habits tracker for both iOS and Android. Designed to help users stay consistent and improve their daily routine. It makes tracki...",
    details: {
      FIREFOX: "",
      CHROME: "",
      EDGE: "",
      slides_count: 4,
      available_slides_locales: ["en"]
    },
  },
  {
    id: "c164beed-67c3-4b5a-86bb-41a5d9a95a4e",
    alias: "LICHESSHELPER",
    logoSrc: "/images/logos/lc.svg",
    title: "LichessHelper",
    desc: "Lichess.org extension that adds new themes, pieces, boards, fonts, and features such as disabling popups,  coordinates on each square...",
    details: {
      FIREFOX: "",
      CHROME: "",
      EDGE: "",
      slides_count: 4,
      available_slides_locales: ["en"]
    },
  },
  {
    id: "aef583ac-6948-45c6-acec-8db9171891be",
    alias: "EASYCALC",
    logoSrc: "/images/logos/ec.svg",
    title: "EasyCalc",
    desc: "A simple calculator extension for performing basic arithmetic calculations. EasyCalc's sleek and efficient design not only looks great but also maximiz...",
    details: {
      FIREFOX: "",
      CHROME: "",
      EDGE: "",
      slides_count: 4,
      available_slides_locales: ["en"]
    },
  },
  {
    id: "c9759454-5de4-4a45-8ba6-1c007738a43c",
    alias: "GWARDAAPP",
    logoSrc: "/images/logos/gw.svg",
    title: "GwardaApp",
    desc: "Discover Amazon product info, find best prices, leverage SEO keywords, locate top suppliers with Reverse ASIN. Access valuable insights into produ...",
    details: {
      FIREFOX: "",
      CHROME: "",
      EDGE: "",
      slides_count: 4,
      available_slides_locales: ["en"]
    },
  },
];

