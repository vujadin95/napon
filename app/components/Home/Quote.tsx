import { useState, useEffect } from "react";
import "./quoteAnimation.css";

interface QuoteProp {
  quotes: string[];
}

const FADE_IN_INTERVAL = 10000;
const FADE_OUT_INTERVAL = FADE_IN_INTERVAL - 1000;
const CHANGE_QUOTE_INTERVAL = FADE_IN_INTERVAL;

const Quote = ({ quotes }: QuoteProp) => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeInInterval = setInterval(() => {
      setFadeOut(false);
      setFadeIn(true);
    }, FADE_IN_INTERVAL);

    const fadeOutInterval = setInterval(() => {
      setFadeIn(false);
      setFadeOut(true);
    }, FADE_OUT_INTERVAL);

    return () => {
      clearInterval(fadeInInterval);
      clearInterval(fadeOutInterval);
    };
  }, [quoteIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (quoteIndex >= quotes.length - 1) {
        setQuoteIndex(0);
      } else {
        setQuoteIndex((prevQuote) => prevQuote + 1);
      }
    }, CHANGE_QUOTE_INTERVAL);

    return () => clearInterval(interval);
  }, [quoteIndex]);

  return (
    <div
      className={`text-center font-[500] md:max-w-[80%]  ${
        fadeIn ? "fade-in" : fadeOut ? "fade-out" : ""
      }`}
    >
      <q className=" sm:text-2xl md:text-3xl block drop-shadow-2xl px-5 sm:px-10 py-5 tracking-wide leading-8">{`${quotes[quoteIndex]}`}</q>
    </div>
  );
};
export default Quote;
