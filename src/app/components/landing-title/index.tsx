import style from "./style.module.scss";
import LocomotiveScroll from "locomotive-scroll";
import React from "react";
import Shortcuts from "@/app/components/shortcuts";

export default function LandingTitle() {
  return (
    <div className={style.title}>
      <div className={style.titleTop} data-scroll data-scroll-speed=".2">
        Discover & Create <br></br>
        <div className={style.underLine}>New Horizons</div>
      </div>
      <div className={style.titleBottom}>
        We're building the productivity tool of the future; for teams and
        individuals alike.
      </div>
      <button className={style.titleButton}>A</button>
      <div className={style.shortcuts}>
        <Shortcuts></Shortcuts>
      </div>
    </div>
  );
}
