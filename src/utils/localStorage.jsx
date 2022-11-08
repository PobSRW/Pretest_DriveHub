const AUTH_TOKEN = 'AUTH_TOKEN';
const CART_DATA = 'CART_DATA';

export const getLocalStorage = () => localStorage.getItem(AUTH_TOKEN);
export const getCartItemStorage = () => localStorage.getItem(CART_DATA);

export const addLocalStorage = (token) =>
	localStorage.setItem(AUTH_TOKEN, token);

export const addCartItemLocalStrorage = (data) =>
	localStorage.setItem(CART_DATA, data);
