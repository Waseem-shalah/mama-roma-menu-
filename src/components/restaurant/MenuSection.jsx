import React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const pizzaBanner = { en: "Pizza", he: "פיצות", ar: "بيتزا" };
const pastaBanner = { en: "Pastas", he: "פסטות", ar: "باستا" };

export default function MenuSection({ section, image, imageAlt, reverse, lang, splitAt }) {
  return (
    <section id={section.id} className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="block w-8 h-px bg-primary/40" />
            <span className="font-body text-[10px] uppercase tracking-[0.5em] text-primary">
              {section.title[lang]}
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            {section.title[lang]}
          </h2>
        </motion.div>

        <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-16`}>
          <div className="flex-1">
            {section.items.map((item, idx) => (
              <React.Fragment key={item.name.en}>
                {splitAt && idx === 0 && (
                  <div className="flex items-center gap-4 mb-8">
                    <span className="block flex-1 h-px bg-border" />
                    <span className="font-body text-[10px] uppercase tracking-[0.5em] text-muted-foreground">{pastaBanner[lang]}</span>
                    <span className="block flex-1 h-px bg-border" />
                  </div>
                )}
                {splitAt && idx === splitAt && (
                  <div className="flex items-center gap-4 my-10">
                    <span className="block flex-1 h-px bg-border" />
                    <span className="font-body text-[10px] uppercase tracking-[0.5em] text-muted-foreground">{pizzaBanner[lang]}</span>
                    <span className="block flex-1 h-px bg-border" />
                  </div>
                )}
                <MenuItem item={item} index={idx} lang={lang} />
              </React.Fragment>
            ))}
          </div>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-[380px] flex-shrink-0"
            >
              <div className="top-24 overflow-hidden rounded-sm relative">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-64 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}