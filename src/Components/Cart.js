import { Link } from 'react-router-dom';
function Cart() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-primary text-white">
            <div>
                <h1>Cart page</h1>
                <Link to='/Checkout'><button className='btn btn-warning'>Go to Checkout</button></Link>
            </div>
        </div>
    )
}

export default Cart;