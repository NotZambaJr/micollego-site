/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import FloatingShape from "@/app/components/landing-view";
import Style from "./page.module.css";
import LandingTitle from "@/app/components/landing-title";
import Header from "@/app/components/header";
import React from "react";
import WhoWeAre from "@/app/components/who-we-are";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/app/components/preloader";
// import MenuSection from "@/app/components/menu-section";
import Immersive from "./components/immersive";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./components/footer";
export default function Home() {


  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      lerp: 0.3,
      duration: 1,
    }
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
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div className={Style.nav}>
        <Header />
      </div>
      <div className={Style.viewMain}>
        <FloatingShape />
      </div>
      <div className={Style.title}>
        <LandingTitle></LandingTitle>
      </div>

      <div className={Style.page1}>
        <WhoWeAre></WhoWeAre>
      </div>
      <div className={Style.page3}data-scroll-container >
        <Immersive data-scroll data-scroll-sticky ></Immersive>
      </div>
      <div className={Style.page4}>
        <Footer></Footer></div>
    </main>
  );
}
