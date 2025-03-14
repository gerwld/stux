"use client";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export function useLocalizedNavigation() {
  const router = useRouter();
  const locale = useLocale();

  return (path: string) => {
    const localizedPath = `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
    router.push(localizedPath);
  };
}
