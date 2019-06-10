import Link from 'next/link'
import Image from '../components/image'


const About = () => {
  return (
    <div>
      <h3>Whazzup its About page</h3>
      <Link href="/"><a><button>Da home page</button></a></Link>
      <Image />
    </div>
  )
}

export default About