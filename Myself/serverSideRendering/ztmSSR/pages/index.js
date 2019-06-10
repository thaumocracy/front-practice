import Link from 'next/link'

const Index = ( ) => (
  <div>
    <h1>SSR stuff WOOO</h1>
    <Link href="/about"><a><button>Da bout page</button></a></Link>
    <Link href="/robots"><a><button>Da robotz page</button></a></Link>
  </div>
)

export default Index