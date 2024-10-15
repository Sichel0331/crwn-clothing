import Button from '../button/button.component';
import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
  
    return (
      <CartDropdownContainer>
        <CartItems>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </CartItems>
        <Link className='checkout' to='/checkout'>
        <Button >CHECKOUT</Button>
        </Link>
      </CartDropdownContainer>
    );
  };
  
  export default CartDropdown;