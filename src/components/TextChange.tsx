import React, { useEffect, useState } from "react";
import { ImClearFormatting } from "react-icons/im";

type Props = {};

const TextChange = (props: Props) => {
  const texts = ["Hello, I am Swarna"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));
      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }
      if (endValue > texts[index].length + 5) {
        setIsForward(false);
      }
      if (endValue < 2.1) {
        setIsForward(true);
        setIndex((prev) => prev & texts.length);
      }
    }, 60);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChange;
