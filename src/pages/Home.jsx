import { Link } from 'react-router-dom'
 
const Home = () => {
    return (
        <>
            <p><Link to={'/about'}>Acerca de</Link></p>
            <h1>Home del proyecto</h1>
        </>
    )
}

export default Home;