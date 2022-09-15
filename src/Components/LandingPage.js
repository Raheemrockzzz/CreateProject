import { Link } from 'react-router-dom';
function Landing() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
            <div>
                <h1>Landing Page</h1>
                <Link to='/Products'><button className='btn btn-primary'>Landing</button></Link>
            </div>
        </div>
    )
}


export default Landing;