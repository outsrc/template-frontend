import * as React from 'react'
import Link from '../components/Link'

interface Props {}

const About: React.FunctionComponent<Props> = () => {
  return (
    <div className='page'>
      <div className='content'>
        <div className='main'>About Us.</div>
        <div className='sub'>
          We are a small team of software engineers scattered around the globe,
          passionate about building software.
        </div>
        <div className='sub'>
          Although incorporated on sunny Miami, Florida, US. We accept business
          proposal from all over the world.
        </div>
        <div className='sub'>
          Send us an email to:
          <a href='mailto:contact@codexsw.com'>contact@codexsw.com</a>
        </div>
        <div className='link'>
          <Link href='/'>
            <a>Home</a>
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
          margin-top: 20px;
          text-align: left;
        }
        .sub a {
          color: #007dff;
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

export default About
