"use client";

import { ReactNode } from "react";

export function Prompt({ path = "~", children }: { path?: string; children?: ReactNode }) {
  return (
    <div className="mb-2">
      <span className="prompt">sankalp@portfolio</span>
      <span className="text-white">:</span>
      <span className="path">{path}</span>
      <span className="text-white">$ </span>
      {children}
    </div>
  );
}
