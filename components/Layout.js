import Head from 'next/head'


export default (props) => (
  <div>
    <Head>
      <title>Theodoria Software</title>
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
    </Head>
    { props.children }
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      html,
      body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      body {
        padding: 1em;
        background-color: #efebe9;
        font-family: 'Montserrat', sans-serif;
      }
      h1 {
        font-size: 3rem;
        margin: 0.5em 0;
      }
      h2 {
        font-size: 1.8rem;
      }
    `}</style>
  </div>
)
