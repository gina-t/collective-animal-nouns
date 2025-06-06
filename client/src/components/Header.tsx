import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import Dragonfly from "./Dragonfly";

gsap.registerPlugin(SplitText);

export default function Header() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  {/* heading split text*/}
  useEffect(() => {
    if (headingRef.current) {
      document.fonts.ready.then(() => {
        const splitText = new SplitText(headingRef.current, {
          type: 'chars, words, lines',
          mask: 'lines',
          linesClass: 'line',
          wordsClass: 'word', 
          charsClass: 'letter'
        });
        {/* heading tween */}
        gsap.from(splitText.chars, {
          y: -100,
          autoAlpha: 0,
          stagger: {
            amount: 0.8,
            from: 'random',
          },
        });

        return () => {
          splitText.revert();
        };
      });
    }
  }, []);

  {/* paragraph split text*/}
  useEffect(() => {
    if (paragraphRef.current) {
      document.fonts.ready.then(() => {
        const splitText = new SplitText(paragraphRef.current, {
          type: 'words, lines, chars',
          mask: 'lines',
          linesClass: 'line',
          wordsClass: 'word', 
          charsClass: 'letter'
        });
         {/* paragraph tween */}
        gsap.from(splitText.chars, {
          autoAlpha: 0,
          stagger: {
            amount: 9.0,
            from: 'start',
            ease: 'none', 
          },
          duration: 0.01, 
          delay: 1.0,
        });
        return () => {
          splitText.revert();
        };
      });
    }
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-[#85A98F] px-6 py-24 sm:py-32 lg:px-8">
   
      {/* Main content */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 
          ref={headingRef}
          className="text-5xl/normal font-medium tracking-tight text-center text-amber-50 sm:text-7xl">
          Collective Nouns for Animals
        </h2>
        <p 
          ref={paragraphRef}
          className="mt-8 text-lg/loose font-medium text-pretty text-center text-amber-50 sm:text-xl/8">
          Nouns used in the english language to describe groups
          of animals. <span>Collective nouns</span> are associated with the sounds,
          appearance, behaviour or habitat of the animal group.
        </p>
        {/* Dragonfly */}
        <div className="flex justify-center">
          <div className="w-96 h-96 opacity-70">
            <Dragonfly />
          </div>
        </div> 
      </div>
    </div>
  );
}

{/* Decorative blurred polygon overlay #1 bottom left */}
      {/* <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#FFCFCF] to-[#FF8A8A] opacity-30"
        />
      </div> */}
      {/* Decorative blurred polygon overlay #2 top right */}
      {/* <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#FFCFCF] to-[#FF8A8A] opacity-30"
        />
      </div> */}