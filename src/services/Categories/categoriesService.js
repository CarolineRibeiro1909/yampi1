import axios from 'axios'

export class categoriesService {

	constructor(){}

	getJeweleryCategorie() {
		const url = `https://fakestoreapi.com/products/category/jewelery`
		return axios.get(url)
					.then(response => response.data)
	}
}