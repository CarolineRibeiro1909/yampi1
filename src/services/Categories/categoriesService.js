import axios from 'axios'

export class categoriesService {

	constructor(){}

	getJeweleryCategorie() {
		const url = `https://fakestoreapi.com/products/category/jewelery`
		return axios.get(url)
					.then(response => response.data)
	}
	getElectronicsCategorie() {
		const url = `https://fakestoreapi.com/products/category/electronics`
		return axios.get(url)
					.then(response => response.data)
	}
	getManCategorie() {
		const url = `https://fakestoreapi.com/products/category/men's clothing`
		return axios.get(url)
					.then(response => response.data)
	}
	getWomanCategorie() {
		const url = `https://fakestoreapi.com/products/category/women's clothing`
		return axios.get(url)
					.then(response => response.data)
	}
}