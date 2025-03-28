import { useEffect, useState } from "react";

const words = ["Front End", "React"];
const typingSpeed = 100;
const pauseDuration = 1000;
export default function TypeWriter() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let typingTimeout;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        typingTimeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        typingTimeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        typingTimeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        }, typingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <h1>
      Desenvolvedor <br />
      {displayText}<span>|</span>
    </h1>
  );
}
