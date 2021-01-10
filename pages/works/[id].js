import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../../components/Header/Header'
import Navigation from '../../components/Navigation/Navigation'
import BigImage from '../../components/BigImage/BIgImage'
import { works } from '../../data/data'

const Work = ({ work }) => (
  <div className="App">
    <Head>
      <title>Metaphor Arts – {work.title}</title>
      <meta
        description="The personal website and gallery of the artist Peter Robson."
        lang="en-US"
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
    </Head>
    <Header />
    <Navigation />
    <BigImage
      src={`/images/${work.id}.jpg`}
      alt="" // todo
      width={500}
      height={400}
      title={work.title}
      quality={100}
    />
  </div>
)

export async function getStaticProps({ params }) {
  const workId = works.findIndex((w) => w.id == params.id)
  const work = works[workId]
  return { props: { work } }
}

export async function getStaticPaths() {
  const paths = works.map((w) => ({
    params: { id: `${w.id}` },
  }))

  return {
    paths: paths,
    fallback: false,
  }
}

export default Work
