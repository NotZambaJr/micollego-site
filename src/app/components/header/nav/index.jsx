"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./Body";
import Footer from "./Footer";
import Image from "next-export-optimize-images/image";

const links = [
  {
    title: "Home",
    href: "/",
    src: "assets/img/icons/Landing.png",
  },
  {
    title: "Project",
    href: "/project",
    src: "assets/img/icons/About.png",
  },
  {
    title: "Contacts",
    href: "/contacts",
    src: "assets/img/icons/Contact.png",
  },
  {
    title: "shop",
    href: "/",
    src: "assets/img/icons/Coming.png",
  },
];

export default function Index() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
        </div>
        <Image
          style={{
            backgroundColor: "#153dbc",
            borderRadius: "1rem",
          }}
          width={400}
          height={400}
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
}
