import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'

const productContext = createContext()
export const useProductContext = () => useContext(productContext)

const ProductContext = ({ children }) => {
	const API = 'http://localhost:3000/product'
	const [product, setProduct] = useState([])
	async function addProduct(newProduct) {
		await axios.post(API, newProduct)
		readProduct()
	}
	async function readProduct() {
		let res = await axios(API)
		setProduct(res.data)
	}
	async function deleteProduct(id) {
		await axios.delete(`${API}/${id}`)
		readProduct()
	}

	const values = {
		addProduct,
		readProduct,
		product,
		deleteProduct,
	}
	return (
		<productContext.Provider value={values}>{children}</productContext.Provider>
	)
}

export default ProductContext
