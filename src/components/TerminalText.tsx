"use client";

import { useState, useEffect } from "react";

interface TerminalTextProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export default function TerminalText({
  text,
  delay = 50,
  className = "",
  onComplete,
}: TerminalTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return <span className={className}>{displayedText}</span>;
}
