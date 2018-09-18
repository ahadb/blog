// ./pages/_document.js
import Router from 'next/router'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
   console.log(Router)
    return (
      <html>
      <Head>
        <link rel="stylesheet" href="/_next/static/style.css" />
        <link href="https://unpkg.com/primer/build/build.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
              integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
              crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet" />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}
