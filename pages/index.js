import Link from 'next/link';

const Index = () => (
    <div>
        <h1>SSR Magic</h1>
        <Link href='/robots'>
            <button>Robots</button>
        </Link>
        <Link href='/about'>
            <button>About</button>
        </Link>
        <a href='/about'>about</a>
    </div>
)

export default Index;