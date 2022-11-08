import { useCarListContext } from '../../context/carListContext';
import { useCartContext } from '../../context/cartContext';
import { getCartItemStorage } from '../../utils/localStorage';

function CarListCard({ item, index }) {
	const { setDataLocalStorage } = useCartContext();
	const { formatPrice } = useCarListContext();

	const handleClickReserve = () => {
		const cart = JSON.parse(getCartItemStorage()) ?? [];
		const arrayIndex = cart.map((item) => item.id);
		if (!arrayIndex.includes(index)) {
			const data = [
				...cart,
				{
					id: index,
					title: item.fields.title,
					price: item.fields.price,
					photo: item.fields.photo,
					quantity: 1,
				},
			];
			// console.log(cart);
			// console.log(data);
			setDataLocalStorage(data);
		}
	};

	return (
		<div className='bg-slate-200 h-[230px] my-3 rounded-lg overflow-hidden mx-[20px]'>
			<div className='flex gap-20'>
				<img
					src={item.fields.photo}
					alt='car'
					className='h-[230px] w-[300px] bg-contain'
				/>
				<div>
					<div className='text-3xl font-bold  pt-5'>{item.fields.title}</div>
					<div className='text-2xl font-semibold mt-5'>
						{formatPrice(item.fields.price)} THB/day
					</div>
					<div>
						<button
							className='w-[200px] text-xl h-[50px] font-semibold mt-7 bg-blue-600 text-white rounded-md'
							onClick={handleClickReserve}
						>
							Reserve
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CarListCard;
