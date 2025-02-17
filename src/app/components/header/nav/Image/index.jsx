import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './style.module.scss';
import { opacity } from '../../anim';

export default function Index({src, isActive}) {
  return (
    <motion.div variants={opacity} initial="initial" animate={isActive ? "open" : "closed"} className={styles.imageContainer}>
        <Image 
        src={`/images/${src}`}
        fill={true}
        alt=""
        style={{width: '100%', height: '100%', backgroundColor: '#153dbc', borderRadius: '1rem'}}
        />
    </motion.div>
  )
}