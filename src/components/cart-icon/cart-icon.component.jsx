import {useContext} from 'react';
import { CartContext } from '../../context/cart.context';

import {CartIconContainer,ItemCount,ShoppingIcon} from  './cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen,cartCount } = useContext(CartContext);
  
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  
    return (
      <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <ItemCount className='item-count'>{cartCount}</ItemCount>
      </CartIconContainer>
    );
  };
  
  export default CartIcon;