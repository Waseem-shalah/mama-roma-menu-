import React, { useState, useEffect } from "react";
import Navbar from "../components/restaurant/Navbar";
import Hero from "../components/restaurant/Hero";
import MenuSection from "../components/restaurant/MenuSection";
import Divider from "../components/restaurant/Divider";
import Footer from "../components/restaurant/Footer";
import { menuData, languages } from "../components/restaurant/MenuData";


const STARTERS_IMG = "";
const PASTA_IMG = "https://media.base44.com/images/public/69d0d56b9131865d8718912c/11f41452e_generated_4cd6dd4f.png";
const WAGYU_IMG = "https://media.base44.com/images/public/69d0d56b9131865d8718912c/4a824de57_generated_a0bd34ce.png";
const RISOTTO_IMG = "https://media.base44.com/images/public/69d0d56b9131865d8718912c/601164947_generated_3930dc17.png";

export default function Home() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const dir = languages.find((l) => l.code === lang)?.dir || "ltr";
    document.documentElement.setAttribute("dir", dir);
    return () => document.documentElement.setAttribute("dir", "ltr");
  }, [lang]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />

      <MenuSection section={menuData.starters} image={STARTERS_IMG} imageAlt="Appetizers" lang={lang} />
      <Divider />
      <MenuSection section={menuData.salads} reverse lang={lang} />
      <Divider />
      <MenuSection section={menuData.intermediate} image={RISOTTO_IMG} imageAlt="Risotto and gnocchi" lang={lang} />
      <Divider />
      <MenuSection section={menuData.pasta} image={PASTA_IMG} imageAlt="Pasta and pizza" reverse lang={lang} splitAt={9} /> 
      <Divider />
      <MenuSection section={menuData.meats} image={WAGYU_IMG} imageAlt="Special meats" lang={lang} />
      <Divider />
      <MenuSection section={menuData.desserts} lang={lang} />

      <Footer lang={lang} />
    </div>
  );
}