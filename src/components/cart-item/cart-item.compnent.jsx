import {CartItemContainer, ItemDetails, sname} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <sname className='name'>{name}</sname>
        <span> {quantity} x ${price} </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;