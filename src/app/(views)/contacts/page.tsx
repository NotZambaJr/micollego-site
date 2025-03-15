"use client";
import React from "react";
import Header from "@/app/components/header";
import SwitchBall from "@/app/components/ball";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/app/components/preloader";
import { useState } from "react";
import styles from "./page.module.scss";

export default function Contact() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
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
        <div className={styles.ball}>
          <SwitchBall></SwitchBall>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactTitle}>contact us on</div>
        <a href="https://www.instagram.com/micollego" className={styles.contactText}>
          INSTAGRAM
        </a>
        <a href="https://www.facebook.com/micollegoteam" className={styles.contactText}>
          FACEBOOK
        </a>
        <a href="https://www.youtube.com/@micollego" className={styles.contactText}>
          YOUTUBE
        </a>
        </div>
      </div>
    </div>
  );
}