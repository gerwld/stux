"use client";
import { Product } from "@/components/items/ProductBlock/ProductBlock";

export const products: Product[] = [
  {
    id: "0ff399d2-9a1c-46c3-83ba-295989686873",
    logoSrc: "/images/logos/igp.svg",
    title: "IGPlus",
    desc: "Disable Instagram Reels, hide Stories, recommendations  comments, trends, and other unnecessary elements, allowing you to focus on...",
    url: "/igplus",
  },
  {
    id: "f702edcb-b036-4b2e-ab75-f11e42f1ddab",
    logoSrc: "/images/logos/memento.svg",
    title: "Memento.",
    desc: "Customizable start page extension for browsers. Features include uploading custom backgrounds, drag-and-drop toolbar widgets.",
    url: "/memento",
  },
  {
    id: "815f5b7f-bcd5-43f4-a5c8-6e4e95fb3fc8",
    logoSrc: "/images/logos/ch.svg",
    title: "ChessHelper",
    desc: "Chess.com extension that adds new themes, pieces, boards, fonts, and features such as disabling popups,  coordinates on each square...",
    url: "/chesshelper",
  },
  {
    id: "6565a677-5e79-4ed2-9cd4-b8f1b15e87ed",
    logoSrc: "/images/logos/sp.svg",
    title: "SpoPlus for Spotify",
    desc: 'Hide Spotify "Now Playing" View, bring back classic heart button, disable albums, change themes, fonts, disable videos to reduce bandwidth usage... ',
    url: "/spoplus",
  },
  {
    id: "384cfb27-4606-4f38-bc9b-d608960c3cff",
    logoSrc: "/images/logos/dh.svg",
    title: "DoHabit",
    desc: "Open-source habits tracker for both iOS and Android. Designed to help users stay consistent and improve their daily routine. It makes tracki...",
    url: "/dohabit",
  },
  {
    id: "c164beed-67c3-4b5a-86bb-41a5d9a95a4e",
    logoSrc: "/images/logos/lc.svg",
    title: "LihessHelper",
    desc: "Lichess.org extension that adds new themes, pieces, boards, fonts, and features such as disabling popups,  coordinates on each square...",
    url: "/lichesshelper",
  },
  {
    id: "aef583ac-6948-45c6-acec-8db9171891be",
    logoSrc: "/images/logos/ec.svg",
    title: "EasyCalc",
    desc: "A simple calculator extension for performing basic arithmetic calculations. EasyCalc's sleek and efficient design not only looks great but also maximiz...",
    url: "/easycalc",
  },
  {
    id: "c9759454-5de4-4a45-8ba6-1c007738a43c",
    logoSrc: "/images/logos/gw.svg",
    title: "GwardaApp",
    desc: "Discover Amazon product info, find best prices, leverage SEO keywords, locate top suppliers with Reverse ASIN. Access valuable insights into produ...",
    url: "/gwardapp",
  },
];

export type ProductLink = {
  id?: string,
  FIREFOX?: string,
  CHROME?: string,
  EDGE?: string,
  GITHUB?: string
} & Record<string, string | undefined>

type ProductLinksObject = Record<string, ProductLink>;

export const productLinks = Object.create(null) as ProductLinksObject;

Object.assign(productLinks, {
  "IGPLUS": {
    id: "0ff399d2-9a1c-46c3-83ba-295989686873",
    FIREFOX: "firefox-link",
    CHROME: "https://chromewebstore.google.com/detail/dbbopjndlaginbghfoibbndhlbpdpapd/",
    EDGE: "edge-link",
  },
  "MEMENTO": {
    id: "f702edcb-b036-4b2e-ab75-f11e42f1ddab",
    FIREFOX: "",
    CHROME: "",
    EDGE: "",
  },
  "CHESSHELPER": {
    id: "815f5b7f-bcd5-43f4-a5c8-6e4e95fb3fc8",
    FIREFOX: "",
    CHROME: "",
    EDGE: "",
  },
  "SPOPLUS": {
    id: "6565a677-5e79-4ed2-9cd4-b8f1b15e87ed",
    FIREFOX: "",
    CHROME: "",
    EDGE: "",
  },
  "DOHABIT": {
    id: "384cfb27-4606-4f38-bc9b-d608960c3cff",
    GITHUB: "",
  },
  "LICHESSHELPER": {
    id: "c164beed-67c3-4b5a-86bb-41a5d9a95a4e",
    FIREFOX: "",
    CHROME: "",
    EDGE: "",
  },
  "EASYCALC": {
    id: "aef583ac-6948-45c6-acec-8db9171891be",
    FIREFOX: "",
    CHROME: "",
    EDGE: "",
  },
  "GWARDAAPP": {
    id: "c9759454-5de4-4a45-8ba6-1c007738a43c",
    FIREFOX: "",
    CHROME: "",
    EDGE: "",
  },
} as const);
