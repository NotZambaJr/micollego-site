"use client";
import { useState, useEffect } from "react";
import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import Style from "./page.module.css";
import { AnimatePresence } from "framer-motion";
import Header from "@/app/components/header";
import FloatingShape from "@/app/components/landing/landing-view/index";
import LandingTitle from "@/app/components/landing/landing-title/index";
import Preloader from "@/app/components/preloader";
import Articles from "@/app/components/articles";
import About from "./components/about";
import Footer from "@/app/components/footer";
import Mobile from "./(views)/mobile/page";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [width, setWidth] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);

    // Initialize LocomotiveScroll only on the client
    if (typeof window !== "undefined") {
      new LocomotiveScroll({
        autoResize: true,
        lenisOptions: {
          lerp: 0.3,
          duration: 1,
        },
      });

      setWidth(window.innerWidth);

      function handleWindowSizeChange() {
        setWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
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
          <LandingTitle />
        </div>

        <div className={Style.page1}>
          <About />
        </div>

        <div className={Style.page2} data-scroll data-scroll-speed=".3">
          <Articles />
        </div>
        <div className={Style.page3}>
          <Footer />
        </div>
      </div>
    );
  }