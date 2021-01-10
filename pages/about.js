import React from 'react'
import Head from 'next/head'
import About from '../components/About/About'
import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'

export default function AboutPage() {
  return (
    <div className="App">
      <Head>
        <title>Metaphor Arts</title>
        <meta
          description="The personal website and gallery of the artist Peter Robson."
          lang="en-US"
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Header />
      <Navigation />
      <About />
    </div>
  )
}
