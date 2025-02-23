'use client';
import styles from './page.module.css'
import { useState } from 'react';
import Project from '@/app/components/_menu-selector/project';
import Modal from '@/app/components/_menu-selector/modal';

const projects = [
    {
      title: "Libano",
      src: "/assets/img/LogoNoBackground.png",
      color: "#000000"
    },
    {
      title: "Marrakech",
      src: "/assets/img/LogoNoBackground.png",
      color: "#8C8C8C"
    },
    {
      title: "Caserta",
      src: "/assets/img/LogoNoBackground.png",
      color: "#EFE8D3"
    },
    {
      title: "Museo M9",
      src: "/assets/img/LogoNoBackground.png",
      color: "#706D63"
    }
  ]
  
  export default function Home() {
  
    const [modal, setModal] = useState({active: false, index: 0})
  
    return (
    <div className={styles.main}>
      <div className={styles.body}>
        {
          projects.map( (project, index) => {
            return <Project index={index} title={project.title} setModal={setModal} key={index}/>
          })
        }
      </div>
      <Modal modal={modal} projects={projects}></Modal>
    </div>
    )
  }