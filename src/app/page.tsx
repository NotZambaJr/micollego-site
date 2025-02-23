/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import React from "react";
import Style from "./page.module.css";
import { AnimatePresence } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import Header from "@/app/components/header";
import FloatingShape from "@/app/components/landing/landing-view/index";
import LandingTitle from "@/app/components/landing/landing-title/index";
import Preloader from "@/app/components/preloader";
import Articles from "@/app/components/articles";
import About from "./components/about";
import Footer from "@/app/components/footer";

export default function Home() {
  const locomotiveScroll = new LocomotiveScroll({
    autoResize: true,
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
    <div className={Style.container}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div className={Style.nav}>
        <Header />
      </div>

      <div className={Style.page0} data-scroll>
        <FloatingShape />
      </div>

      <div className={Style.title} data-scroll data-scroll-speed=".4">
        <LandingTitle></LandingTitle>
      </div>

      <div className={Style.page1}>
        <About></About>
      </div>

      <div className={Style.page2} data-scroll data-scroll-speed=".3">
        <Articles></Articles>
      </div>
      <div className={Style.page3}>
        <Footer></Footer>
      </div>
    </div>
  );
}
