import Head from 'next/head'
import Gallery from '../components/Gallery/Gallery'
import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Metaphor Arts</title>
        <meta
          description="The personal website and gallery of the artist Artist Name."
          lang="en-US"
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Header />
      <Navigation />
      <Gallery />
    </div>
  )
}
