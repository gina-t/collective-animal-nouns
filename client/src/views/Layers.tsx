import { useContext, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

import TransitionContext from '../context/TransitionContext';
import Header from '../components/Header';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Layers() {
  const main = useRef<HTMLElement>(null); // ← Keep this as main
  const { completed } = useContext(TransitionContext);
  
  useGSAP(
    () => {
      if (!completed) return;

      // iOS-specific configuration
      ScrollTrigger.config({
        ignoreMobileResize: true,
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
      });
      
      // Wait for fonts inside the useGSAP callback
      document.fonts.ready.then(() => {
        const panelTexts = gsap.utils.toArray<Element>('.panel-text');
        
        if (panelTexts.length === 0) {
          console.warn('No panel texts found');
          return;
        }

        // Set willChange for ALL panel texts once at the beginning
        gsap.set('.panel-text', { willChange: 'transform' });
        
        panelTexts.forEach((text) => {
          const splitText = new SplitText(text, {
            type: 'chars',
            charsClass: 'char'
          });

          // Animate each paragraph when its panel comes into view
          ScrollTrigger.create({
            trigger: text.closest('div.min-h-screen'),
            start: "top 90%", // Earlier trigger
            end: "center center",
            toggleActions: "play pause resume reverse",
            invalidateOnRefresh: true,
            // markers: true,
            onEnter: () => {
              // Slower, more visible animation
              gsap.fromTo(splitText.chars,
                {
                  opacity: 0,
                  y: 50,
                  scale: 0.8
                },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  stagger: 0.08, // Slower stagger - more visible
                  duration: 2.0, // Much longer duration
                  ease: "back.out(1.7)",
                  onComplete: () => {
                    gsap.set(splitText.chars, { willChange: 'auto' });
                  }
                }
              );
            },
            onLeave: () => {
              gsap.set(splitText.chars, { opacity: 1, y: 0 });
            },
            onEnterBack: () => {
              gsap.from(splitText.chars, {
                opacity: 0,
                y: 30,
                stagger: 0.02,
                duration: 0.8,
                ease: "power2.out",
                onComplete: () => {
                  // Clean up willChange for THIS specific splitText
                  gsap.set(splitText.chars, { willChange: 'auto' });
                }
              });
            }
          });
        });
        
        ScrollTrigger.refresh();
      }).catch((error) => {
        console.error('Font loading failed:', error);
      });
    },
    {
      dependencies: [completed],
      scope: main, // ← This works with main ref
      revertOnUpdate: true,
    }
  );
  
  return (
    <main ref={main}>
      {/* Header */}
      <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#85A98F]">
        <Header />
      </div>
      
      {/* Panels */}
      <div>
        {/* panel 1 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#8DBCC7] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">A parliament of owls</p>
          </div>
        </div>
        
        {/* panel 2 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#A4CCD9] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">A murder of crows</p>
          </div>
        </div>
        
        {/* panel 3 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#C4E1E6] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">An unkindness of ravens</p>
          </div>
        </div>
        
        {/* panel 4 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#EBFFD8] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">An exaltation of larks</p>
          </div>
        </div>

        {/* panel 5 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#5A827E] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">A murmuration of starlings</p>
          </div>
        </div>

        {/* panel 6 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#84AE92] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">A pod of whales</p>
          </div>
        </div>

        {/* panel 7 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#B9D4AA] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">A tower of giraffes</p>
          </div>
        </div>

        {/* panel 8 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FAFFCA] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">A flamboyance of flamingoes</p>
          </div>
        </div>

        {/* panel 9 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#B7B1F2] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">An ostentation of peacocks</p>
          </div>
        </div>

        {/* panel 10 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FDB7EA] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">A skulk of foxes</p>
          </div>
        </div>

        {/* panel 11 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FFDCCC] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">A cast of hawks</p>
          </div>
        </div>

        {/* panel 12 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FBF3B9] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">A tidings of magpies</p>
          </div>
        </div>

        {/* panel 13 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FCC6FF] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">A pride of lions</p>
          </div>
        </div>

        {/* panel 14 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FFE6C9] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">A shrewdness of apes</p>
          </div>
        </div>

        {/* panel 15 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FFC785] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">A leap of leopards</p>
          </div>
        </div>

        {/* panel 16 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FFA09B] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">A shoal of bass</p>
          </div>
        </div>

        {/* panel 17 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FF90BB] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">An obstinancy of buffalo</p>
          </div>
        </div>
        
        {/* panel 18 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#FFC1DA] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">A caravan of camels</p>
          </div>
        </div>
        
        {/* panel 19 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#F8F8E1] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">A mob of emus</p>
          </div>
        </div>
        
        {/* panel 20 */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center text-center bg-[#8ACCD5] text-gray-800 px-3">
          <div>
            <p className="panel-text mt-4 text-2xl">A pandemonium of parrots</p>
          </div>
        </div>
      </div>
    </main>
  );
}
