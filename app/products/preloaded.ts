import { ColorSchemeType } from "../schemas/schemas";

export interface Product {
  logoSrc: string;
  title: string;
  desc: string;
  id: string;
  alias: string;
  version?: string;
  colorScheme?: ColorSchemeType;
  details: ProductDetails,
  productType: ProductType,
}


export type ProductType = "EXTENSION" | "APPLICATION" | "GITHUB";

type Browsers = "FIREFOX" | "CHROME" | "EDGE";

export type ProductLinks = {
  FIREFOX?: string,
  CHROME?: string,
  EDGE?: string,
  GITHUB?: string,
  APPSTORE?: string,
  PLAYMARKET?:string
}

export type ProductBrowserLinks = Pick<ProductLinks, Browsers>;


export type ProductDetails = {
  id?: string,
  links: ProductLinks,
  stats?: Stats,
  preview_features?: PrevFeature[],
  preview_reviews?: PrevReview[],
  slides_count?: number,
  available_slides_locales?: string[],
}

export type Stats = {
  users: number;
  reviews: number;
  rating: number;
}

export type PrevFeature = {
  iconUrl: string,
  title: string,
  description: string
}

export type PrevReview = {
  avatarUrl: string,
  author: string,
  description: string
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
    productType: "EXTENSION",
    details: {
      links: {
        FIREFOX: "firefox-link",
        CHROME: "https://chromewebstore.google.com/detail/dbbopjndlaginbghfoibbndhlbpdpapd/",
        EDGE: "edge-link",
      },
      stats: {
        users: 10000,
        reviews: 680,
        rating: 4.9
      },
      preview_features: [
        { title: 'Hide <br>Explore Page', iconUrl: '/images/features/look.png', description: 'Turn off the Explore page to focus only on the content that matters to you.'},
        { title: 'Hide <br>Recommendations', iconUrl: '/images/features/point.png',  description: 'See only content from accounts you follow - no more unwanted suggestions'},
        { title: 'Personalize <br>Fonts', iconUrl: '/images/features/fonts.png', description: 'Choose from various fonts like Montserrat, Poppins, and more to suit your style.'},
        { title: 'Customize <br>Notifications', iconUrl: '/images/features/list.png', description: 'Grayscale or disable the new message counter to reduce distractions.'},
        { title: 'Disable <br>Reels & Videos', iconUrl: '/images/features/camera.png', description: 'Disable Reels and video content for a cleaner, distraction-free experience.'},
        { title: 'Hide Like <br>& Follower Counts', iconUrl: '/images/features/heart.png', description: 'Make Instagram a more mindful space by hiding likes and follower numbers.'},
      ],
      preview_reviews: [
           { author: 'ZachHere', avatarUrl: '/images/pfp/1.jpg', description:'Very good extension. I like the ability to grayscale. One feature that would make this extension better would be the ability to disable suggested posts from the main page. They are very bothering for me'},
           { author: 'Barbora Viski', avatarUrl: '/images/pfp/2.jpg', description:'Hate falling into the shortform content trap.<br> Love the apps that allow me to forget it exists.'},
           { author: 'Cristiano Nunes', avatarUrl: '/images/pfp/3.jpg', description:'This extension is incredibly useful! It has significantly improved my productivity by removing unnecessary distractions, helping focus on what truly matters.'},
           { author: 'Akram Mohamed', avatarUrl: '/images/pfp/4.jpg', description:'Very good extension. The best and most affective one! Love all the features! Would request a similar for youtube as well'},
           { author: 'Martin Hublar', avatarUrl: '/images/pfp/5.jpg', description:'It really is an time saver, it is especially good for those people who drift off to reels section from message section unconsciously.'},
           { author: 'Cailan Wiat', avatarUrl: '/images/pfp/6.jpg', description:"This extension was a perfect investment for me, i have instagram for its intended inspiration purpose and that's it i never spend more than 30 mins a week on the app and i don't have to battle the need to be on it anymore its incredible."},
      ],
      slides_count: 7,
      available_slides_locales: ["en"]
    },
  },
  {
    id: "f702edcb-b036-4b2e-ab75-f11e42f1ddab",
    alias: "MEMENTO",
    logoSrc: "/images/logos/memento.svg",
    title: "Memento.",
    desc: "Customizable start page extension for browsers. Features include uploading custom backgrounds, drag-and-drop toolbar widgets.",
    productType: "EXTENSION",
    details: {
     links: {
        FIREFOX: "firefox-link",
        CHROME: "https://chromewebstore.google.com/detail/dbbopjndlaginbghfoibbndhlbpdpapd/",
        EDGE: "edge-link",
      },
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
    productType: "EXTENSION",
    details: {
     links: {
        FIREFOX: "firefox-link",
        CHROME: "https://chromewebstore.google.com/detail/dbbopjndlaginbghfoibbndhlbpdpapd/",
        EDGE: "edge-link",
      },
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
    productType: "EXTENSION",
    details: {
     links: {
        FIREFOX: "firefox-link",
        CHROME: "https://chromewebstore.google.com/detail/dbbopjndlaginbghfoibbndhlbpdpapd/",
        EDGE: "edge-link",
      },
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
    productType: "APPLICATION",
    details: {
     links: {
        FIREFOX: "firefox-link",
        CHROME: "https://chromewebstore.google.com/detail/dbbopjndlaginbghfoibbndhlbpdpapd/",
        EDGE: "edge-link",
      },
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
    productType: "EXTENSION",
    details: {
     links: {
        FIREFOX: "firefox-link",
        CHROME: "https://chromewebstore.google.com/detail/dbbopjndlaginbghfoibbndhlbpdpapd/",
        EDGE: "edge-link",
      },
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
    productType: "EXTENSION",
    details: {
     links: {
        FIREFOX: "firefox-link",
        CHROME: "https://chromewebstore.google.com/detail/dbbopjndlaginbghfoibbndhlbpdpapd/",
        EDGE: "edge-link",
      },
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
    productType: "EXTENSION",
    details: {
     links: {
        FIREFOX: "firefox-link",
        CHROME: "https://chromewebstore.google.com/detail/dbbopjndlaginbghfoibbndhlbpdpapd/",
        EDGE: "edge-link",
      },
      slides_count: 4,
      available_slides_locales: ["en"]
    },
  },
];

