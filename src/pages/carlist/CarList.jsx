import { useCarListContext } from '../../context/carListContext';
import CarListCard from './CarListCard';

function CarList() {
	const { carList } = useCarListContext();

	return (
		<div className='w-full h-[600px] bg-blue-500 overflow-y-scroll border-4 border-blue-700'>
			{carList?.map((item, index) => (
				<CarListCard key={index} item={item} index={index} />
			))}
		</div>
	);
}

export default CarList;
