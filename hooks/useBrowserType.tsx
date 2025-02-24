import { useEffect, useState } from "react";

export type BrowserType = 
  | "SERVER"
  | "BRAVE"
  | "EDGE"
  | "OPERA"
  | "CHROME"
  | "FIREFOX"
  | "SAFARI";

const getBrowserType = (): BrowserType => {
  if (typeof window === "undefined") return "SERVER";
  const userAgent = navigator.userAgent;

  if ((navigator as any).brave) return "BRAVE"; 
  if (/Edg\//.test(userAgent)) return "EDGE";
  if (/OPR\//.test(userAgent) || /Opera/.test(userAgent)) return "OPERA";
  if (/Chrome/.test(userAgent) && !/Edg\//.test(userAgent)) return "CHROME";
  if (/Firefox/.test(userAgent)) return "FIREFOX";
  if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) return "SAFARI";
  
  return "CHROME";
};

export function useBrowserType(): BrowserType {
  const [browser, setBrowser] = useState<BrowserType>("SERVER");

  useEffect(() => {
    setBrowser(getBrowserType());
  }, []);

  return browser;
}
