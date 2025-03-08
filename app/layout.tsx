import type { Metadata } from "next";

import "./globals.css";
import "./schemas/schemas.css";
import "./switzer.css";

export const metadata: Metadata = {
  title: "WebLX Applications",
  description: "From browser extensions and CLI tools to libraries and mobile applications, our solutions always focus on attention to detail and user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
