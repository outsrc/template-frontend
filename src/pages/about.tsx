import * as React from 'react'
import Link from '../components/Link'
import styles from '../styles/page.module.scss'

interface Props {}

const About: React.FunctionComponent<Props> = () => {
  return (
    <div className={styles.page}>
      <div className={styles.main}>About Us.</div>
      <div className={styles.sub}>Coded with love in Miami Fl.</div>
      <div className={styles.link}>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
    </div>
  )
}

export default About
