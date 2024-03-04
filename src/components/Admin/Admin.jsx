import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useProductContext } from '../../context/ProductContext'
import './Admin.scss'
const Admin = () => {
	const [name, setName] = useState('')
	const [year, setYear] = useState('')
	const [image, setImage] = useState('')

	const { addProduct } = useProductContext()

	function getProduct() {
		if (!name.length || !year.length || !image.length) {
			alert('Заполните полю!!!')
		} else {
			let obj = {
				name: name,
				year: year,
				image: image,
				like: 0,
				checkLike: false,
			}
			addProduct(obj)
			setName('')
			setYear('')
			setImage('')
		}
	}
	return (
		<div id='create'>
			<div className='container'>
				<div className='create'>
					<div className='create--content'>
						<Typography variant='h4'>CRUD</Typography>
						<TextField
							value={name}
							onChange={e => {
								setName(e.target.value)
							}}
							id='standard-basic'
							label='name...'
							variant='standard'
						/>
						<TextField
							value={year}
							onChange={e => {
								setYear(e.target.value)
							}}
							id='standard-basic'
							label='Year...'
							variant='standard'
						/>
						<TextField
							value={image}
							onChange={e => {
								setImage(e.target.value)
							}}
							id='standard-basic'
							label='Image...'
							variant='standard'
						/>
						<Button
							onClick={getProduct}
							sx={{ background: '#181818' }}
							variant='contained'
						>
							Create
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Admin
