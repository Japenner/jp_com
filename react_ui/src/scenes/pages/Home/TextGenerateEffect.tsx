// src/components/TextGenerateEffect.tsx
import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import {
  Root,
  Wrapper,
  WordContainer,
  HighlightSpan,
  NormalSpan,
} from "./TextGenerateEffect.styles";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, filter, duration, scope]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const SpanComponent = idx > 0 && idx < 5 ? HighlightSpan : NormalSpan;
          return (
            <SpanComponent
              key={`${word}-${idx}`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </SpanComponent>
          );
        })}
      </motion.div>
    );
  };

  return (
    <Root className={className}>
      <Wrapper>
        <WordContainer>{renderWords()}</WordContainer>
      </Wrapper>
    </Root>
  );
};

export default TextGenerateEffect;
