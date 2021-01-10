import Image from 'next/image'
import Link from 'next/link'
import Header from '../../../components/Header/Header'
import Navigation from '../../../components/Navigation/Navigation'
import BigImage from '../../../components/BigImage/BIgImage'
import { works } from '../../../data/data'

const Work = ({ title, id }) => (
  <div className="App">
    <Header />
    <Navigation />
    <BigImage
      src={`/images/${id}.jpg`}
      alt="" // todo
      width={500}
      height={400}
      title={title}
      quality={100}
    />
  </div>
)

Work.getInitialProps = async ({ query }) => {
  console.log(query)
  const workId = works.findIndex((w) => w.id == query.id)
  console.log(workId, works[workId])
  return works[workId]
}

export default Work
