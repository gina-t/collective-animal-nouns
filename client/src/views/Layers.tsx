import { useContext, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

import TransitionContext from '../context/TransitionContext';
import Header from '../components/Header';

gsap.registerPlugin(ScrollTrigger, SplitText);

interface ScrollTriggerObserverSelf {
  scrollY(): number;
  deltaY: number;
}

export default function Layers() {
  const main = useRef<HTMLElement>(null);
  const { completed } = useContext(TransitionContext);
  const scrollTween = useRef<gsap.core.Tween | null>(null);
  const snapTriggers = useRef<ScrollTrigger[]>([]);

  const { contextSafe } = useGSAP(
    () => {
      if (!completed) return;
      
      const panels = gsap.utils.toArray<Element>('.snap-section');
      let scrollStarts: number[] = [0];
      let snapScroll: (value: number, direction?: number) => number = (value: number) => value;
      
      panels.forEach((panel, i) => {
        snapTriggers.current[i] = ScrollTrigger.create({
          trigger: panel,
          start: "top top"
        });
      });

      ScrollTrigger.addEventListener("refresh", () => {
        scrollStarts = snapTriggers.current.map(trigger => trigger.start);
        snapScroll = ScrollTrigger.snapDirectional(scrollStarts);
      });

      ScrollTrigger.observe({
        type: "wheel,touch",
        onChangeY(self: ScrollTriggerObserverSelf) {
          if (!scrollTween.current) {
            const scroll = snapScroll(self.scrollY() + self.deltaY, self.deltaY > 0 ? 1 : -1);
            goToSection(scrollStarts.indexOf(scroll));
          }
        }
      });

      // Animate all panel paragraphs
      const panelTexts = gsap.utils.toArray<Element>('.panel-text');
      panelTexts.forEach((text) => { // ← Removed unused 'i' parameter
        const splitText = new SplitText(text, {
          type: 'chars',
          charsClass: 'char'
        });

        // Animate each paragraph when its panel comes into view
        ScrollTrigger.create({
          trigger: text.closest('.snap-section'),
          start: "top center",
          onEnter: () => {
            gsap.from(splitText.chars, {
              opacity: 0,
              y: 50,
              stagger: 0.05,
              duration: 0.8,
              ease: "back.out(1.7)"
            });
          }
        });
      });

      ScrollTrigger.refresh();
    },
    {
      dependencies: [completed],
      scope: main,
      revertOnUpdate: true,
    }
  );

  const goToSection = contextSafe((i: number) => {
    console.log("scroll to", i);
    scrollTween.current = gsap.to(window, {
      scrollTo: { y: snapTriggers.current[i].start, autoKill: false },
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        scrollTween.current = null;
      },
      overwrite: true
    });
  });

  return (
    <main ref={main}>
      {/* Header section */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#85A98F]">
        <Header />
      </section>
      
      {/* panel 1 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#8DBCC7] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">A parliament of owls</p>
        </div>
      </section>
      
      {/* panel 2 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#A4CCD9] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">A murder of crows</p>
        </div>
      </section>
      
      {/* panel 3 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#C4E1E6] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">An unkindness of ravens</p>
        </div>
      </section>
      
      {/* panel 4 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#EBFFD8] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">An exaltation of larks</p>
        </div>
      </section>

      {/* panel 5 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#5A827E] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">A murmuration of starlings</p>
        </div>
      </section>

      {/* panel 6 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#84AE92] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">A pod of whales</p>
        </div>
      </section>

      {/* panel 7 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#B9D4AA] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">A tower of giraffes</p>
        </div>
      </section>

      {/* panel 8 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FAFFCA] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">A flamboyance of flamingoes</p>
        </div>
      </section>

      {/* panel 9 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#B7B1F2] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">An ostentation of peacocks</p>
        </div>
      </section>

      {/* panel 10 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FDB7EA] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">A skulk of foxes</p>
        </div>
      </section>

      {/* panel 11 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FFDCCC] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">A cast of hawks</p>
        </div>
      </section>

      {/* panel 12 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FBF3B9] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">A tidings of magpies</p>
        </div>
      </section>

      {/* panel 13 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FCC6FF] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">A pride of lions</p>
        </div>
      </section>

      {/* panel 14 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FFE6C9] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">A shrewdness of apes</p>
        </div>
      </section>

      {/* panel 15 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FFC785] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">A leap of leopards</p>
        </div>
      </section>

      {/* panel 16 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FFA09B] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">A shoal of bass</p>
        </div>
      </section>

      {/* panel 17 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FF90BB] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">An obstinancy of buffalo</p>
        </div>
      </section>
      {/* panel 18 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FFC1DA] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">A caravan of camels</p>
        </div>
      </section>
      {/* panel 19 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#F8F8E1] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">A mob of emus</p>
        </div>
      </section>
      {/* panel 20 */}
      <section className="snap-section min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#8ACCD5] text-gray-800 px-3">
        <div>
          <p className="panel-text mt-4 text-2xl">A pandemonium of parrots</p>
        </div>
      </section>
    </main>
  );
}
