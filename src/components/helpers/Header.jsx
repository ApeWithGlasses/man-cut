import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <nav className='navbar'>
            <Link to={'/'}><img src='./mancut-logo.png' alt="Man's Cut Logo"/></Link>
            <ul>
                <li><Link to={'/products'}>Products</Link></li>
                <li><Link to={'/clients'}>Clients</Link></li>
                <li><Link to={'/barbers'}>Barbers</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header