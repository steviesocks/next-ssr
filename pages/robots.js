import Link from 'next/link';

const Robots = (props) => {

    const robots = Object.values(props)

    return (
        <div>
            <h1>Robots</h1>
            <Link href='/'>
                <button>
                    Home
                </button>
            </Link>
            <div>
                {
                    robots.map(robot => (
                        <li key={robot.id}>
                            <Link href={`robots/${robot.id}`}>
                                <a>
                                    {robot.name}
                                </a>
                            </Link>
                        </li>
                    ))
                }
            </div>
        </div>
    )
};

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props: {...data}
    }
}

export default Robots;