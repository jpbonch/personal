import Image from "next/image";
import styles from "./page.module.css";
import brazil from "../public/brazil.svg"

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.name}>João Bonchristiano</h1>
      <p className={styles.text}>I'm a second-year Computer Science major at <a className={styles.clickable} href="https://www.gatech.edu/">Georgia Tech</a> from Brazil, <br></br>
      concentrating in systems/architecture and computer networks.
        <br></br>
         <br></br>My interests lie in processor design, operating systems, as well as quantitative finance. 
         Previously, I've worked at <a className={styles.clickable} href="https://www.microsoft.com/en-us/">Microsoft</a>.</p>
         <hr></hr>
      <div className={styles.links}>
        <a className={styles.link} href="Resume.pdf">resume</a>
        <span className={styles.divider}>|</span>
        <a className={styles.link} href="mailto:jp.bonchristiano@gmail.com">email</a>
        <span className={styles.divider}>|</span>
        <a className={styles.link} href="https://linkedin.com/in/jpbonch">linkedin</a>
        <span className={styles.divider}>|</span>
        <a className={styles.link} href="https://github.com/jpbonch">github</a>
      </div>
    </main>
  );
}
