import React from "react";

export default function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex items-center gap-4">
        <span className="flex-1 h-px bg-border/60" />
        <span className="text-primary/40 text-lg font-heading">✦</span>
        <span className="flex-1 h-px bg-border/60" />
      </div>
    </div>
  );
}