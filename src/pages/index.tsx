import * as React from 'react'
import Link from '../components/Link'
import CodexswLogo from '../components/CodexswLogo'

interface Props {}

const Index: React.FunctionComponent<Props> = () => {
  return (
    <div className='page'>
      <div className='content'>
        <div className='logo'>
          <CodexswLogo />
        </div>
        <div className='main'>We build software</div>
        <div className='sub'>
          Web and mobile applications, infrastructure development, Automation
        </div>
        <div className='link'>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </div>
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
        .content {
          display: flex;
          flex-direction: column;
          margin: 0 20px;
          max-width: 500px;
        }
        .main {
          font-size: 60px;
        }
        .sub {
          font-size: 23px;
          color: #666;
          font-weight: 200;
        }
        .link {
          margin-top: 20px;
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
