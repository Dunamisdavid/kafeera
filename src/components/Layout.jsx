import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { getMeta } from "../data/seo";

export default function Layout() {
  const { pathname, hash } = useLocation();
  const meta = getMeta(pathname);

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <Header />
      <main><Outlet /></main>
      <Footer />
    </>
  );
}