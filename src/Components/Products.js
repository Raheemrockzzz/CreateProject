import { Link } from 'react-router-dom';
function Products() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-primary text-white">
            <div>
                <h1>Products page</h1>
                <Link to='/Cart'><button className='btn btn-warning'>Go to Cart</button></Link>
            </div>
        </div>
    )
}

export default Products;