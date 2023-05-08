import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner">
            <h1>Welcome!</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis rem tempore inventore voluptas explicabo?</p>
            <div className="btns">
                <Link to={'/products'}><button>Products</button></Link>
                <Link to={'/clients'}><button>Clients</button></Link>
                <Link to={'/barbers'}><button>Barbers</button></Link>
            </div>
        </div>
    )
}

export default Banner