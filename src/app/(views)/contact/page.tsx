"use client";
import React from "react";
import Header from "@/app/components/header";
import SwitchBall from "@/app/components/ball";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/app/components/preloader";
import { useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { HyperText } from "@/app/components/anim-text";
import styles from "./page.module.scss";

export default function Contact() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      lerp: 0.3,
      duration: 1,
    },
  });

  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 3000);
  }, []);

  return (
    <div id="scroll-container">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div className={styles.header}>
        <Header></Header>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.ball}><SwitchBall></SwitchBall></div>
        <div className={styles.contact}>
          <div className={styles.contactTitle}>contact us on</div>
          <HyperText
            duration={3000}
            delay={0}
            startOnView
            className={styles.contactText}
          >
            INSTAGRAM
          </HyperText>
          <HyperText
            duration={3000}
            delay={250}
            startOnView
            className={styles.contactText}
          >
            LINKEDIN
          </HyperText>
          <HyperText
            duration={3000}
            delay={500}
            startOnView
            className={styles.contactText}
          >
            FACEBOOK
          </HyperText>
          <HyperText
            duration={3000}
            delay={750}
            startOnView
            className={styles.contactText}
          >
            TWITTER
          </HyperText>
          <HyperText
            duration={3000}
            delay={1000}
            startOnView
            className={styles.contactText}
          >
            EMAIL
          </HyperText>
        </div>
      </div>
    </div>
  );
}
