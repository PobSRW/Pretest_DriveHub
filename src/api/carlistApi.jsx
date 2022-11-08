import axios from '../config/axios';

export const fetchCarList = async () =>
	await axios.get(
		'https://cdn.contentful.com/spaces/vveq832fsd73/entries?content_type=car'
	);

export const fetchDiscount = async () =>
	await axios.get(
		'https://cdn.contentful.com/spaces/vveq832fsd73/entries?content_type=discount'
	);
