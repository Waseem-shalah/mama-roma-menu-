import React from "react";
import { motion } from "framer-motion";

const footerText = {
  en: { tagline: "Galilian Italian Excellence", sub: "Where every dish tells a story" },
  he: { tagline: "מצוינות איטלקית גלילית", sub: "בה כל מנה מספרת סיפור" },
  ar: { tagline: "التميز الإيطالي الجليلي", sub: "حيث تحكي كل طبق قصة" },
};

export default function Footer({ lang }) {
  const t = footerText[lang];
  return (
    <footer className="py-20 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="font-body text-[10px] uppercase tracking-[0.5em] text-primary/60">
            Mama Roma
          </span>
          <h3 className="font-heading text-3xl md:text-4xl italic text-accent mt-4">
            {t.tagline}
          </h3>

          <div className="flex items-center justify-center gap-4 mt-10">
            <span className="block w-16 h-px bg-border/40" />
            <span className="font-heading text-sm text-muted-foreground italic">{t.sub}</span>
            <span className="block w-16 h-px bg-border/40" />
          </div>

          <p className="font-body text-[10px] text-muted-foreground/50 mt-12 tracking-wider">
            © {new Date().getFullYear()} Mama Roma · All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}