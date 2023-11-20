import { useEffect, useRef, useState } from "react";

type Line = {
  text: string;
  probability: number;
};
export const l = (text: string, probability: number): Line => ({
  text,
  probability,
});
export const useCompileText = (initLines: Line[]) => {
  const indexRef = useRef<number>(0);
  const [compiledText, setCompiledText] = useState<string[]>([]);
  const [since] = useState<number>(Date.now());
  const [last, setLast] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = indexRef.current;
      const probability =
        index != 0 ? initLines.at(index - 1)?.probability ?? 0.2 : 1;
      if (Math.random() < probability) {
        const line = initLines.at(index);
        if (line !== undefined) {
          indexRef.current = index + 1;
          setCompiledText((prev) => [...prev, line.text]);
        } else {
          setLast(last === null ? Date.now() - since : last);
          clearInterval(interval);
        }
      }
    }, 10);

    return () => clearInterval(interval);
  }, [initLines, indexRef, setCompiledText]);

  const takenMilliSeconds = last;

  return { compiledText, takenMilliSeconds };
};
