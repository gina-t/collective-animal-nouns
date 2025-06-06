import Router from "./router";
import TransitionComponent from "./components/Transition";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; 
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// Register plugins
gsap.registerPlugin(
  ScrollSmoother,
  ScrollTrigger,
  ScrollToPlugin,
  SplitText,
  useGSAP,
);

export default function App() {
  return (
    <TransitionComponent>
      <div>
        <Router />
      </div>
    </TransitionComponent>
  );
}


