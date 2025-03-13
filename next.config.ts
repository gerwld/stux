import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/ch/update",
        destination: "/products/chesshelper/update",
        permanent: true, 
      },
      {
        source: "/lc/update",
        destination: "/products/lichesshelper/update",
        permanent: true, 
      },
      {
        source: "/igp/update",
        destination: "/products/igplus/update",
        permanent: true, 
      },
      {
        source: "/sp/update",
        destination: "/products/spoplus/update",
        permanent: true, 
      },
      {
        source: "/ec/update",
        destination: "/products/easycalc/update",
        permanent: true,
      },
      {
        source: "/memento/update",
        destination: "/products/memento/update",
        permanent: true,
      },

      {
        source: "/ch/welcome",
        destination: "/products/chesshelper/welcome",
        permanent: true, 
      },
      {
        source: "/lc/welcome",
        destination: "/products/lichesshelper/welcome",
        permanent: true, 
      },
      {
        source: "/igp/welcome",
        destination: "/products/igplus/welcome",
        permanent: true, 
      },
      {
        source: "/sp/welcome",
        destination: "/products/spoplus/welcome",
        permanent: true, 
      },
      {
        source: "/ec/welcome",
        destination: "/products/easycalc/welcome",
        permanent: true,
      },
      {
        source: "/memento/welcome",
        destination: "/products/memento/welcome",
        permanent: true,
      },


      {
        source: "/ch",
        destination: "/products/chesshelper/",
        permanent: true, 
      },
      {
        source: "/lc",
        destination: "/products/lichesshelper/",
        permanent: true, 
      },
      {
        source: "/igp",
        destination: "/products/igplus/",
        permanent: true, 
      },
      {
        source: "/sp",
        destination: "/products/spoplus/",
        permanent: true, 
      },
      {
        source: "/ec",
        destination: "/products/easycalc/",
        permanent: true,
      },
      {
        source: "/memento",
        destination: "/products/memento/",
        permanent: true,
      },
    ];
  },
  basePath: "",
};

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
export default withNextIntl(nextConfig);
