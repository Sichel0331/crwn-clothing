import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles';
import { CheckoutContainer, CheckoutHeader, Total, HeaderBlock} from './checkout.styles';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock as='span'>Product</HeaderBlock>
                <HeaderBlock as='span'>Despcription</HeaderBlock>
                <HeaderBlock as='span'>Quantity</HeaderBlock>
                <HeaderBlock as='span'>Price</HeaderBlock>
                <HeaderBlock as='span'>Remove</HeaderBlock>                                 
            </ CheckoutHeader>
                {
                    cartItems.map((cartItem) =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )}
                <Total as='span'>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    );
};

export default Checkout;