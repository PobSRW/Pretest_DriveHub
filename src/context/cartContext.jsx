import { createContext, useContext, useEffect, useState } from 'react';
import {
	getCartItemStorage,
	addCartItemLocalStrorage,
} from '../utils/localStorage';

const CartContext = createContext();

function CartContextProvider({ children }) {
	const [cartItem, setCartItem] = useState(null);

	useEffect(() => {
		setCartItem(JSON.parse(getCartItemStorage()));
	}, []);

	const setDataLocalStorage = (data) => {
		setCartItem(data);
		addCartItemLocalStrorage(JSON.stringify(data));
	};

	return (
		<CartContext.Provider
			value={{
				cartItem,
				setCartItem,
				setDataLocalStorage,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export const useCartContext = () => {
	return useContext(CartContext);
};

export default CartContextProvider;
