import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material'
import React, { useEffect } from 'react'
import { useProductContext } from './../../context/ProductContext'
import './readProduct.scss'
const ReadProduct = () => {
	const { readProduct, product, deleteProduct } = useProductContext()
	useEffect(() => {
		readProduct()
	}, [])

	return (
		<div id='menu'>
			<div className='container'>
				<div className='menu'>
					{product.map(el => (
						<Card
							key={el.id}
							className='menu--card'
							sx={{ maxWidth: 345, padding: 2 }}
						>
							<CardMedia
								component='img'
								alt='url is not correct!'
								height='280'
								image={el.image}
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									{el.name}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									{el.year}
								</Typography>
							</CardContent>
							<CardActions>
								<Button onClick={() => deleteProduct(el.id)} size='small'>
									<DeleteOutlineIcon />
								</Button>
								<Button size='small'>
									<FavoriteBorderIcon />
								</Button>
							</CardActions>
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}

export default ReadProduct
