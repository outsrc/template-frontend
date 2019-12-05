import * as React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { IntlProvider } from 'react-intl'
import getConfig from 'next/config'
import messagesEs from '../translations/es.json'

const { publicRuntimeConfig } = getConfig()

const messages = {
  es: messagesEs
}

class TemplateApp extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <IntlProvider
        locale={publicRuntimeConfig.locale}
        messages={messages[publicRuntimeConfig.locale]}
      >
        <Head>
          <meta
            httpEquiv='content-language'
            content={publicRuntimeConfig.locale}
          />
        </Head>
        <Component {...pageProps} />
      </IntlProvider>
    )
  }
}

export default TemplateApp
