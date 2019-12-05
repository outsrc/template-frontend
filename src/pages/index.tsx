import * as React from 'react'
import Link from '../components/Link'
import { FormattedMessage } from 'react-intl'

interface Props {}

const Index: React.FunctionComponent<Props> = () => {
  return (
    <div className='page'>
      <div className='main'>
        <FormattedMessage id='index.hello' defaultMessage='Hello Frontend' />
      </div>
      <div className='sub'>
        <FormattedMessage
          id='index.cantwait'
          defaultMessage={"We can't wait to see what will you build."}
        />
      </div>
      <div className='link'>
        <Link href='/about'>
          <a>
            <FormattedMessage id='index.link.about' defaultMessage='About' />
          </a>
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
