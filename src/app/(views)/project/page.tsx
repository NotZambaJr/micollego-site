"use client";
import React from "react";
import Header from "@/app/components/header";
import LocomotiveScroll from "locomotive-scroll";
import { Iphone15Pro } from "@/app/components/iphone";
import styles from "./page.module.scss";
import Landing from "@/app/components/project-landing";
import PhoneSection from "@/app/components/phone-section";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/app/components/magicui/bento-grid";

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export default function project() {
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      lerp: 0.3,
      duration: 1,
    },
  });

  return (
    <div id="scroll-container" className={styles.container}>
      <Header />
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
          <PhoneSection src={"./assets/img/mockup/map-page.png"}></PhoneSection>
          <PhoneSection
            left
            src={"./assets/img/mockup/map-page.png"}
          ></PhoneSection>
        </div>
      </div>
      <div className={styles.page4}>
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>

      <div className={styles.space}></div>
    </div>
  );
}
