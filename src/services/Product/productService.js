import axios from 'axios'

export class productService {

	constructor(){}

	getAllProducts() {
		const url = `https://fakestoreapi.com/products`
		return axios.get(url)
					.then(response => response.data)
	}
}