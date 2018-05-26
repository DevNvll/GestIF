import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    return { html, head, errorHtml, chunks }
  }

  render() {
    return (
      <html>
        <Head>
          <link
            href="//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,600,700,300&subset=latin"
            rel="stylesheet"
            type="text/css"
          />
          <link rel="stylesheet" href="../static/css/bootstrap.min.css" />
          <link rel="stylesheet" href="../static/css/AdminLTE.min.css" />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
          <link rel="stylesheet" href="../static/css/skin-black.min.css" />
          <link rel="stylesheet" href="../static/css/pace.min.css" />
          <link
            href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
            rel="stylesheet"
          />
          <script src="../static/js/jquery.min.js" />
        </Head>
        <body className="login-page hold-transition skin-black sidebar-mini">
          <script src="../static/js/bootstrap.min.js" />
          <script src="../static/js/app.min.js" />
          <script src="../static/js/pace.min.js" />
          <script src="../static/fix.js" />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
