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
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet" />
          <script src="../static/tween.js" />
      </Head>
      <body>
      <Main />
      <NextScript />

      <script src="../static/terminal.js" />
      <script>
        init()
      </script>
      </body>
      </html>
    )
  }
}
