import { createContext, useContext, useEffect, useState } from 'react';
import * as carListService from '../api/carlistApi';
import { addLocalStorage } from '../utils/localStorage';

const CarListContext = createContext();

function CarListContextProvider({ children }) {
	const [carList, setCarList] = useState(null);
	const [discount, setDiscount] = useState(null);

	const fetchCarList = async () => {
		const res = await carListService.fetchCarList();
		setCarList(res.data.items);
	};

	const fetchDiscount = async () => {
		const res = await carListService.fetchDiscount();
		setDiscount(res.data.items);
	};

	const filterDiscount = (codeDiscount) => {
		const discountCode = discount.filter(
			(item) => item.fields.code === codeDiscount
		);
		// console.log(discountCode[0].fields.amount);
		return discountCode[0].fields.amount;
	};

	const formatPrice = (price) => {
		return String(price)?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	};

	useEffect(() => {
		addLocalStorage('VPmo2U661gTnhMVx0pc0-CtahNg_aqS5DuneLtYfO1o');
		fetchCarList();
		fetchDiscount();
	}, []);

	return (
		<CarListContext.Provider
			value={{ carList, discount, filterDiscount, formatPrice }}
		>
			{children}
		</CarListContext.Provider>
	);
}

export const useCarListContext = () => {
	return useContext(CarListContext);
};

export default CarListContextProvider;
