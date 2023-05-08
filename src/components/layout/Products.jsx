import Header from '../helpers/Header';
import Footer from '../helpers/Footer';
import { products } from '../../database/products';

const Products = () => {
  return (
    <>
      <Header />
      <div className="products__container">
        {
          products.map((product) => (
            <div className="product__card">
              <img src={product.image} className="product__img"/>
              <h5 className='product__name'>{product.name}</h5>
              <p><strong>${product.price}</strong></p>
            </div>
          ))
        }
      </div>
      <Footer />
    </>
  )
}

export default Products