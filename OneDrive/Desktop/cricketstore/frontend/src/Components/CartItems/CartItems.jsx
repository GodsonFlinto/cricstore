import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
export const CartItems = () => {
    const {getTotalCartItem,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart} = useContext(ShopContext)

  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div key={e.id}>
                <div className="cartitems-format cartitems-format-main">
                    <img className='cartitems-product-icon' src={e.image} alt="" />
                    <p>{e.name}</p>
                    <p  className='cart-title'>{e.new_price}</p>
                    <div className="cartitems-quantity-box">
  <button onClick={() => removeFromCart(e.id)}>-</button>
  <span>{cartItems[e.id]}</span>
  <button onClick={() => addToCart(e.id)}>+</button>
</div>
                    <p className='cart-price'>Rs.{e.new_price*cartItems[e.id]}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                </div>
            }
            return null
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>Rs.{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>Rs.{getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Proceed To Checkout</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='Promo-code'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
