import React from 'react'
import styles from "../stylesheets/FileInfoBar.module.css"
import { HiOutlineFolder  } from "react-icons/hi";
import { PiTextTBold , PiBookmarkSimpleBold } from "react-icons/pi";
function FileInfoBar() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icon}><HiOutlineFolder/></div>
        <h1>100</h1>
        <p>Uploaded Files</p>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}><PiTextTBold/></div>
        <h1>50</h1>
        <p>Transcribed</p>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}><PiBookmarkSimpleBold/></div>
        <h1>20</h1>
        <p>Saved</p>
      </div>
    </div>
  )
}

export default FileInfoBar
