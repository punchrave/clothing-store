import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	Typography,
} from '@mui/material'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { mockProducts } from '../../data/products'
import { addToCart } from '../../store/cart/cartSlice'
import { useAppDispatch } from '../../store/hooks'

const ProductDetailPage = () => {
	const { id } = useParams<{ id: string }>()
	const product = mockProducts.find(p => p.id === Number(id))

	const dispatch = useAppDispatch()

	const [selectedImage, setSelectedImage] = useState(
		product?.imageUrls[0] || ''
	)
	const [selectedSize, setSelectedSize] = useState<string | null>(null)


	const handleAddToCart = () => {
		if (product && selectedSize) {
			dispatch(addToCart({ product, size: selectedSize }))
			alert(`${product.name} (размер ${selectedSize}) добавлен в корзину!`)
		} 
	}

	if (!product) {
		return (
			<Typography variant='h4' sx={{ p: 3 }}>
				Продукт не найден
			</Typography>
		)
	}

	return (
		<Box sx={{ p: { xs: 3, md: 1 }, maxWidth: '1400px' }}>
			<Grid container spacing={{ xs: 2, md: 4 }}>
				<Grid item xs={12} md={7}>
					<Grid container spacing={2}>
						<Grid item xs={2}>
							<Stack spacing={1}>
								{product.imageUrls.map((img, index) => (
									<Box
										key={index}
										component='img'
										src={img}
										onClick={() => setSelectedImage(img)}
										sx={{
											width: '100%',
											cursor: 'pointer',
											border:
												selectedImage === img
													? '2px solid black'
													: '2px solid transparent',
											objectFit: 'cover',
											aspectRatio: '1 / 1.2',
										}}
									/>
								))}
							</Stack>
						</Grid>
						<Grid item xs={10}>
							<Box
								component='img'
								src={selectedImage}
								alt={product.name}
								sx={{
									width: '100%',
									height: 'auto',
									maxHeight: '80vh',
									objectFit: 'cover',
									aspectRatio: '1 / 1.2',
								}}
							/>
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={12} md={5}>
					<Typography variant='h4' component='h1' gutterBottom>
						{product.name}
					</Typography>
					<Typography variant='h5' gutterBottom sx={{ mb: 2 }}>
						{product.price}
					</Typography>

					<FormControl fullWidth sx={{ my: 2 }}>
						<InputLabel id='size-label'>Размер</InputLabel>
						<Select
							labelId='size-select-label'
							id='size-select'
							size='medium'
							value={selectedSize}
							label='Размер'
							onChange={e => setSelectedSize(e.target.value)}
						>
							{product.sizes.map(size => (
								<MenuItem key={size} value={size}>
									{size}
								</MenuItem>
							))}
						</Select>
					</FormControl>

					<Button
						variant='contained'
						color='primary'
						size='large'
						fullWidth
						onClick={handleAddToCart}
						sx={{
							my: 2,
							py: 1.5,
							backgroundColor: 'black',
							'&:hover': { backgroundColor: '#333' },
						}}
					>
						Добавить в корзину
					</Button>

					<Box sx={{ mt: 4 }}>
						<Accordion>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<Typography>Детали</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>{product.details}</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<Typography>Доставка и возврат</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>{product.deliveryInfo}</Typography>
							</AccordionDetails>
						</Accordion>
					</Box>
				</Grid>
			</Grid>
		</Box>
	)
}

export default ProductDetailPage
