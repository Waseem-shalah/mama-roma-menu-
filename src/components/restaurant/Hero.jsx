import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import logo from '../../images/logo.jpg';

const HERO_BG = "https://media.base44.com/images/public/69d0d56b9131865d8718912c/121f9def8_generated_e6b38366.png";
const LOGO = logo;

const heroText = {
  en: { subtitle: "Galilian Italian Kitchen", tagline: "Where Italian tradition meets Galilian soul — fresh seafood, handmade pasta & premium Wagyu" },
  he: { subtitle: "מטבח איטלקי גלילי", tagline: "בו מסורת איטלקית פוגשת את הנשמה הגלילית — פירות ים טריים, פסטה עשויה ביד ובשר ואגיו מובחר" },
  ar: { subtitle: "مطبخ إيطالي جليلي", tagline: "حيث تلتقي التقاليد الإيطالية بروح الجليل — ثمار بحر طازجة، معكرونة يدوية ولحم واغيو فاخر" },
};

export default function Hero({ lang }) {
  const t = heroText[lang];

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="Mama Roma restaurant ambiance" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <img src={LOGO} alt="Mama Roma logo" className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="block w-12 h-px bg-primary/50" />
            <span className="font-body text-xs uppercase tracking-[0.4em] text-primary">Est. Galilee</span>
            <span className="block w-12 h-px bg-primary/50" />
          </div>

          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-light text-foreground tracking-wide">
            Mama Roma
          </h1>

          <p className="font-heading text-xl md:text-2xl italic text-accent mt-4 tracking-wider">
            {t.subtitle}
          </p>

          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mt-8 max-w-md mx-auto leading-relaxed">
            {t.tagline}
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={() => document.getElementById("starters")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-16 animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-primary/60" />
        </motion.button>
      </div>
    </section>
  );
}