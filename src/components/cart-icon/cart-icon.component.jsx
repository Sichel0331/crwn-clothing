import { useContext } from 'react';
import { CartIconContainer, ShoppingIcon, ItemCount }  from './cart-icon.styles';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (    
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon/>
        <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
    );
};

export default CartIcon;