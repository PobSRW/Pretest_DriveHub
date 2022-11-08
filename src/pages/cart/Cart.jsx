import { useState } from 'react';
import { useCarListContext } from '../../context/carListContext';
import { useCartContext } from '../../context/cartContext';
import CartItem from './CartItem';

function Cart() {
	const [code, setCode] = useState('');
	const [discount, setDiscount] = useState(null);
	const { cartItem } = useCartContext();
	const { filterDiscount, formatPrice } = useCarListContext();

	const handleClickSubmit = () => {
		const discountPrice = filterDiscount(code);
		setDiscount(discountPrice);
	};

	const totalPrice = () => {
		return cartItem?.reduce(
			(sum, item) => (sum += item.price * item.quantity),
			0
		);
	};

	const grandTotalPrice = () => {
		const price = totalPrice();
		const total = price - discount;
		if (total >= 0) {
			return total;
		} else {
			return 0;
		}
	};

	return (
		<div className='flex flex-col  justify-between w-full h-[600px] bg-blue-200 border-4 border-blue-700 overflow-y-scroll'>
			<div>
				<div className='text-3xl font-bold text-center py-3 bg-blue-500'>
					Cart
				</div>
				<div className='flex flex-col gap-3 '>
					{cartItem?.map((item, index) => (
						<CartItem key={index} item={item} index={index} />
					))}
				</div>
			</div>
			<div className='bg-blue-500 text-white text-lg px-8'>
				<h1 className='flex items-center w-full h-[40px] justify-center'>
					Total : {formatPrice(totalPrice())} THB
				</h1>

				{discount ? (
					<h1 className='flex justify-center'>
						Discount : {formatPrice(discount)} THB
					</h1>
				) : (
					<div className='flex items-center justify-center'>
						<h1 className='mr-4'>Discount Code :</h1>
						<input
							type='text'
							onChange={(e) => setCode(e.target.value)}
							className='text-black rounded-md mr-8'
						/>
						<button
							className='bg-blue-900 w-[100px] h-[30px] rounded-lg'
							onClick={handleClickSubmit}
						>
							Submit
						</button>
					</div>
				)}
				<h1 className='flex items-center w-full h-[40px] justify-center'>
					Grand Total : {formatPrice(grandTotalPrice())} THB
				</h1>
			</div>
		</div>
	);
}

export default Cart;
