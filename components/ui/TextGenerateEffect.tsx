"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span, a",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      },
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          if (idx > 9)
            return (
              <motion.a
                key={word + idx}
                href="https://rubyonrails.org"
                target="_blank"
                className={`text-[#ba170a] opacity-0`}
              >
                {word}{" "}
              </motion.a>
            );
          if (idx === 3)
            return (
              <motion.span key={word + idx} className={`text-purple opacity-0`}>
                {word}{" "}
              </motion.span>
            );
          if (idx === 8)
            return (
              <motion.a
                key={word + idx}
                href="https://nextjs.org"
                target="_blank"
                className={`text-[#2d3947] opacity-0`}
              >
                {word}{" "}
              </motion.a>
            );
          return (
            <motion.span
              key={word + idx}
              className={`dark:text-white text-black opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
