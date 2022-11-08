import { useCarListContext } from '../../context/carListContext';
import { useCartContext } from '../../context/cartContext';

function CartItem({ item, index }) {
	const { setCartItem, cartItem, setDataLocalStorage } = useCartContext();
	const { formatPrice } = useCarListContext();

	const handleClickIncrease = () => {
		const cloneCartItem = [...cartItem];
		cloneCartItem[index] = {
			...cartItem[index],
			quantity: (item.quantity += 1),
		};
		setCartItem(cloneCartItem);
		// console.log(cloneCartItem);
		setDataLocalStorage(cloneCartItem);
	};

	const handleClickDecrease = () => {
		const cloneCartItem = [...cartItem];
		cloneCartItem[index] = {
			...cartItem[index],
			quantity: (item.quantity -= 1),
		};

		if (item.quantity >= 1) {
			setCartItem(cloneCartItem);
			// console.log(cloneCartItem);
			setDataLocalStorage(cloneCartItem);
		} else {
			const deleteCart = cloneCartItem.filter((item) => item.quantity !== 0);
			setCartItem(deleteCart);
			setDataLocalStorage(deleteCart);
		}
	};

	return (
		<div>
			<div className='w-full bg-slate-200 h-[100px]'>
				<div className='flex justify-between px-10'>
					<img src={item.photo} alt='pic' className='h-[100px] w-[200px]' />
					<div className='flex flex-col items-center justify-center'>
						<h1 className='text-xl font-extrabold'>{item.title}</h1>
						<h1 className='font-bold'>{formatPrice(item.price)}</h1>
					</div>
					<div className='flex pl-[30px] gap-3 items-center '>
						<button
							className='w-[30px] h-[30px] bg-white rounded-md font-bold'
							onClick={handleClickIncrease}
						>
							+
						</button>
						<h1>{item.quantity}</h1>
						<button
							className='w-[30px] h-[30px] bg-white rounded-md font-bold'
							onClick={handleClickDecrease}
						>
							-
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
