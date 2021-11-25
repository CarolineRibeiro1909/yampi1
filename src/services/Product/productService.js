import axios from 'axios'

export class productService {

	constructor(){}

	getAllProducts() {
		const url = `https://fakestoreapi.com/products`
		return axios.get(url)
					.then(response => response.data)
	}

	postAgendaContato(agenda) {
		const url = `${process.env.VUE_APP_API_ROOT}/agenda-contato`
		return axios.post(url, agenda)
					.then(response => response)
	}

	putAgendaContato(id, agenda) {
		const url = `${process.env.VUE_APP_API_ROOT}/agenda-contato/${id}`
		return axios.put(url, agenda)
					.then(response => response)
	}
}