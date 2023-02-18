import React, { useContext, useState } from 'react'
import { CartContext } from './CartConctext'

function QuantityBtn({productInfo}) {
  // cartItems[productIndexCart].quantity == in checout.js, cartItems's related index's quantity
  const { cartItems, setCartItems } = useContext(CartContext)

  let productIndexInCart = cartItems.findIndex((element) => {return element.id === productInfo.id})

  const [numInCart, setNumInCart] = useState((productIndexInCart === -1) ? 0 : cartItems[productIndexInCart].quantity)

  
  


  const handleAdd = () => {
    if (productIndexInCart === -1) {
      setCartItems(
        [{
          id: productInfo.id,
          name:productInfo.name,
          image:productInfo.image,
          price:productInfo.price,
          description:productInfo.description,
          quantity:1
          },...cartItems]
      )
    }else{
      let newCartArray = [...cartItems]
      newCartArray[productIndexInCart].quantity++
      setCartItems(newCartArray)
    }
    setNumInCart(numInCart+1)
  }
  const handleSubtract = () => {
    if(cartItems[productIndexInCart].quantity === 1){
      let newCartArray = [...cartItems]
      newCartArray.splice(productIndexInCart, 1)
      setCartItems(newCartArray)
    }else{
      let newCartArray = [...cartItems]
      newCartArray[productIndexInCart].quantity--
      setCartItems(newCartArray)
    }
    setNumInCart(numInCart-1)
  }

  return (
    <div>
      {
        numInCart === 0 ?
          <button onClick={handleAdd}>Add in Cart</button>
          : <div>
            <button onClick={handleSubtract}>-</button>
            {numInCart} items
            <button onClick={handleAdd}>+</button>
          </div>
      }
    </div>
  )
}

export default QuantityBtn