import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.compnent';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
  
    return (
      <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <span className='empty-message'>Your cart is empty</span>
          )}
        </div>
        <Link className='checkout' to='/checkout'>
        <Button >CHECKOUT</Button>
        </Link>
      </div>
    );
  };
  
  export default CartDropdown;