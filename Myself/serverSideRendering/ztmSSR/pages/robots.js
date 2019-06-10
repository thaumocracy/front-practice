import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Robots = (props) => {
  return (
    <div>
      <h1>Robots</h1>
      <Link href="/"><a><button>Home</button></a></Link>
      <div>
        <ul className="robots">
        {props.robots.map(robot => <Link href={`robots/${robot.id}`}><a><li key={robot.id}>{robot.name}</li></a></Link>)}
        </ul>

      </div>
    </div>
  )
}

Robots.getInitialProps = async function() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)
  return {
    robots:data
  }
}
export default Robots