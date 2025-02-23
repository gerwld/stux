import { useEffect } from "react";

export function useSchemaCSS() {
  useEffect(() => {
    const links = document.querySelectorAll("link[href$='-schema.css']");
    
    return () => {
      links.forEach(link => link.remove());
    };
  }, []);
}