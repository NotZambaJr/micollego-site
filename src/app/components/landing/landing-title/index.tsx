import style from "./style.module.scss";
import React from "react";
import Shortcuts from "@/app/components/landing/shortcuts";

export default function LandingTitle() {
  return (
    <div className={style.title}>
      <div className={style.titleTop} data-scroll data-scroll-speed=".2">
        Discover & Create <br></br>
        <div className={style.underLine}>New Horizons</div>
      </div>
      <div className={style.titleBottom}>
        We&apos;re building the productivity tool of the future; for teams and
        individuals alike.
      </div>
      <img className={style.titleButton} src="./assets/img/IconNoBackground.png" alt="logo"></img>
      <div id="shotcuts"className={style.shortcuts}>
        <Shortcuts></Shortcuts>
      </div>
    </div>
  );
}
