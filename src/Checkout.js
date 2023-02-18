import ReusableTitle from "./ReusableTitle"
import { Link } from "react-router-dom";
import QuantityBtn from "./QuantityBtn";
import { useContext } from "react";
import { CartContext } from "./CartConctext";


function Checkout() {

    let {cartItems} = useContext(CartContext)


    let cartEmpty = cartItems.length <= 0 ? true : false;
    let grandTotal = cartItems.reduce((total, product) => {
        return total += product.price * product.quantity
    }, 0)
    const freeShippingPrice = 99 

  return (
    <div>
        <ReusableTitle  mainTitle='Your Shopping Cart' />

        { cartEmpty && 
            <div>Shopping Cart has NO items <br />
            <Link to='/'>Back to Product Page</Link>
            </div>
        }   

        {!cartEmpty && 
            <div>
            <div id="cartSection">
                {cartItems.map(product => (
                   <div key={product.id}>
                    <img src={process.env.PUBLIC_URL+'/img1/'+product.image} alt='404 not found' width='300' height='300' /> <br/>
                     {product.name}
                    {product.description} <br />
                    price: {product.price} <br />
                    Product Quantity: {product.quantity}
                    <QuantityBtn productInfo={product}/>
                    </div>
                ))}
            </div>
            <div id="checkOutSection">
                <div>total: </div>
                <div>${grandTotal}</div>

                {
                    grandTotal >= freeShippingPrice ?
                    <div>It is freeShipping now, enjoy!</div>
                    : <div>Total price exceeds ${freeShippingPrice} <br/>
                    ${freeShippingPrice - grandTotal} left to get our free shipping service!
                    </div>
                }
            </div>
            </div>}
    </div>
  )
}

export default Checkout