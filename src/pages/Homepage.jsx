import React from 'react';
import CarList from './carlist/CarList';
import Cart from './cart/Cart';
import Footer from './Footer';
import Navbar from './Navbar';

function Homepage() {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div className='flex px-[40px] gap-10 py-10'>
				<CarList />
				<Cart />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default Homepage;
