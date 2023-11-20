import { useEffect, useState } from "react";

type Line = {
  text: string;
  probability: number;
};
export const l = (text: string, probability: number): Line => ({
  text,
  probability,
});
export const useCompileText = (initLines: Line[]) => {
  const [lines, setLines] = useState<Line[]>(initLines);
  const [compiledText, setCompiledText] = useState<string[]>([]);
  const [since] = useState<number>(Date.now());
  const [last, setLast] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < (lines.at(0)?.probability ?? 0.001)) {
        const line = lines.at(0);
        console.log(line);
        if (line !== undefined) {
          setLines((prev) => prev.slice(1));
          setCompiledText((prev) => [...prev, line.text]);
        } else {
          setLast(last === null ? Date.now() - since : last);
          clearInterval(interval);
        }
      }
    }, 10);

    return () => clearInterval(interval);
  }, [lines, setLines, setCompiledText]);

  const takenMilliSeconds = last;

  return { compiledText, takenMilliSeconds };
};
