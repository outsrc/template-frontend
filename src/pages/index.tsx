import * as React from 'react'

interface Props {}

const Index: React.FunctionComponent<Props> = () => {
  return (
    <div className='page'>
      <div className='main'>Hello Frontend</div>
      <div className='sub'>We can wait to see what will you build.</div>

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
      `}</style>
    </div>
  )
}

export default Index

