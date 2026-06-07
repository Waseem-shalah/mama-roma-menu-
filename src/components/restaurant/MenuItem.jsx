import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ImageIcon } from "lucide-react";

export default function MenuItem({ item, index, lang }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border-b border-border/40 last:border-b-0"
    >
      {/* Clickable row */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left py-5 group flex items-start justify-between gap-4"
      >
        <div className="flex-1">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="font-heading text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
              {item.name[lang]}
            </h3>
            {item.price && (
              <span className="font-heading text-base text-primary">
                {item.price}
              </span>
            )}
          </div>
          {item.description[lang] && (
            <p className="font-body text-sm text-muted-foreground mt-1.5 leading-relaxed max-w-lg">
              {item.description[lang]}
            </p>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground mt-1.5 shrink-0 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      {/* Expandable image area */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5">
              {item.image ? (
            <div className="w-full max-w-md"> 
                <img
                src={item.image}
                alt={item.name[lang]}
                className="w-full h-auto object-contain rounded-md shadow-sm border border-border/10"
                />
            </div>
            ) : (
                <div className="w-full max-w-md h-56 rounded-sm border border-border/40 bg-muted/20 flex flex-col items-center justify-center gap-2 text-muted-foreground">
                  <ImageIcon className="w-8 h-8 opacity-30" />
                  <span className="font-body text-xs uppercase tracking-widest opacity-40">Photo coming soon</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}