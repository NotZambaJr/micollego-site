
'use client';
import React from "react";
import Header from "@/app/components/header";
import LocomotiveScroll from "locomotive-scroll";
import { Iphone15Pro } from "@/app/components/iphone";
import styles from "./page.module.scss";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/app/components/preloader";
import Landing from "@/app/components/project-landing";
import PhoneSection from "@/app/components/phone-section";
import Footer from "@/app/components/footer";
import FeaturesSection from "@/app/components/project-points";

export default function Project() {
  if (typeof window !== "undefined") {
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
      }, 3000);
    }, []);

    return (
      <div id="scroll-container" className={styles.container}>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <div className={styles.nav}><Header /></div>
        <div className={styles.landing}>
          <Landing></Landing>
        </div>
        <div className={styles.page1}>
          <div className={styles.phoneContainer}>
            <Iphone15Pro
              className={styles.phone}
              data-scroll
              data-scroll-speed=".2"
              src={"./assets/img/mockup/map-page.png"}
            ></Iphone15Pro>
            <Iphone15Pro
              className={styles.phone}
              data-scroll
              data-scroll-speed=".1"
              src={"./assets/img/mockup/search-page.png"}
            ></Iphone15Pro>
            <Iphone15Pro
              className={styles.phone}
              data-scroll
              data-scroll-speed="0"
              src={"./assets/img/mockup/home-page.png"}
            ></Iphone15Pro>
            <Iphone15Pro
              className={styles.phone}
              data-scroll
              data-scroll-speed=".1"
              src={"./assets/img/mockup/upload-page.png"}
            ></Iphone15Pro>
            <Iphone15Pro
              className={styles.phone}
              data-scroll
              data-scroll-speed=".2"
              src={"./assets/img/mockup/timer-page.png"}
            ></Iphone15Pro>
          </div>

          <div className={styles.content}>feel like You are the One.</div>
        </div>

        <div className={styles.page2}>
          <div className={styles.phoneContainer}>
            <Iphone15Pro
              className={styles.phone}
              data-scroll
              data-scroll-speed="0.5"
              src={"./assets/img/mockup/review-page.png"}
            ></Iphone15Pro>
            <Iphone15Pro
              className={styles.phone}
              data-scroll
              data-scroll-speed="0.2"
              src={"./assets/img/mockup/highlights-page.png"}
            ></Iphone15Pro>
            <Iphone15Pro
              className={styles.phone}
              data-scroll
              data-scroll-speed="0.1"
              src={"./assets/img/mockup/video-review-page.png"}
            ></Iphone15Pro>
          </div>
        </div>

        <div className={styles.page3}>
          <div className={styles.upperTitle}>FEATURES</div>
          <div className={styles.title}>Poweful Features</div>
          <div className={styles.PhoneSection}>
            <PhoneSection
              src={"./assets/img/mockup/search-page.png"}
            ></PhoneSection>
            <PhoneSection
              left
              src={"./assets/img/mockup/map-page.png"}
            ></PhoneSection>
          </div>
        </div>
        <div className={styles.page4}>
          <div className={styles.upperTitle}>FEATURES</div>
          <div className={styles.title}>Poweful Features</div>
          <div className={styles.Features}>
            <FeaturesSection></FeaturesSection>
          </div>
        </div>
        <div className={styles.page5} data-scroll data-scroll-speed=".3">
          <Footer />
        </div>
      </div>
    );
  }
}
