import * as React from 'react'
import Link from '../components/Link'
import getConfig from 'next/config'

interface Props {}

const { publicRuntimeConfig } = getConfig()

const Index: React.FunctionComponent<Props> = () => {
  return (
    <div className='page'>
      <div className='main'>Hello, from {publicRuntimeConfig.appName}</div>
      <div className='sub'>We can't wait to see what will you build.</div>
      <div className='link'>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </div>
      {/* language=CSS */}
      <style jsx>{`
        .page {
          font-family: sans-serif;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .main {
          font-size: 60px;
        }
        .sub {
          font-size: 23px;
          color: #666;
          font-weight: 200;
        }
        .link a {
          color: #007dff;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}

export default Index
