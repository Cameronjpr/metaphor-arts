import Image from 'next/image'
import Link from 'next/link'
import { works } from '../../../data/data'

const Work = ({ title, id }) => (
  <>
    <nav>
      <Link href="/">
        <a>Back</a>
      </Link>
    </nav>
    <h1>{title}</h1>
    <Image
      src={`/images/${id}.jpg`}
      alt="" // todo
      width={500}
      height={400}
      quality={100}
      priority={true}
    />
  </>
)

Work.getInitialProps = async ({ query }) => {
  console.log(query)
  const workId = works.findIndex((w) => w.id == query.id)
  console.log(workId, works[workId])
  return works[workId]
}

export default Work
