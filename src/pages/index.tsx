import * as React from 'react'
import Link from '../components/Link'
import styles from '../styles/page.module.scss'

interface Props {}

const Index: React.FunctionComponent<Props> = () => {
  return (
    <div className={styles.page}>
      <div className={styles.main}>Hello Frontend</div>
      <div className={styles.sub}>We can't wait to see what will you build.</div>
      <div className={styles.link}>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </div>
    </div>
  )
}

export default Index
