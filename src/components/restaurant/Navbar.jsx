import React, { useState, useEffect } from "react";
import { menuCategories, languages } from "./MenuData";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const cats = menuCategories[lang];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 gap-4">
        <button
          onClick={() => handleNav("hero")}
          className="font-heading text-2xl font-semibold text-primary tracking-wider shrink-0"
        >
          Mama Roma
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {cats.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleNav(cat.id)}
              className="font-body text-xs uppercase tracking-widest text-accent hover:text-primary transition-colors duration-300"
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Language switcher */}
        <div className="hidden md:flex items-center gap-1 shrink-0">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`px-2.5 py-1 font-body text-xs tracking-wider rounded transition-all duration-200 ${
                lang === l.code
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-accent"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-accent hover:text-primary transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {/* Language switcher mobile */}
              <div className="flex items-center gap-2 pb-3 border-b border-border/40">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`px-3 py-1 font-body text-xs tracking-wider rounded transition-all duration-200 ${
                      lang === l.code
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-accent"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              {cats.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleNav(cat.id)}
                  className="font-body text-sm uppercase tracking-widest text-accent hover:text-primary transition-colors text-left"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}