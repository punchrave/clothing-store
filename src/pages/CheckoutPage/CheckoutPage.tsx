import {
	Box,
	Button,
	Container,
	Grid,
	Paper,
	TextField,
	Typography,
} from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../store/hooks'

const parsePrice=(price:string):number=>{
	const numericString=price.replace(/[^\d.]/g, '')
		return parseFloat(numericString)||0
}

const CheckoutPage = () => {
	const cartItems=useAppSelector(state=>state.cart.items)
	const totalPrice=cartItems.reduce((total,item)=>{
		return total+parsePrice(item.price)*item.quantity
	},0)
	
	const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
		event.preventDefault()
		alert('Заказ успешно оформлен!')
	}

	return (
		<Container sx={{my:4}}>
			<Typography variant='h4' component='h1' gutterBottom>
				Оформление заказа
			</Typography>
			<Grid container spacing={4}>
				<Grid item xs={12} md={5}>
					<Typography variant='h5' gutterBottom>
						Ваш заказ
					</Typography>
					<Paper variant='outlined' sx={{p:2}}>
						{cartItems.map(item=>(
							<Box key={`${item.id}-${item.selectedSize}`}
								sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
									<Typography>
									{item.name} ({item.selectedSize}) x{item.quantity}
								</Typography>
								<Typography>
									{(parsePrice(item.price) * item.quantity).toLocaleString(
										'ru-RU'
									)}{' '}
									руб.
								</Typography>
								</Box>
						))}
						<hr />
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								mt: 2,
								fontWeight: 'bold',
							}}
						>
							<Typography variant='h6'>Итого:</Typography>
							<Typography variant='h6'>
								{totalPrice.toLocaleString('ru-RU')} руб.
							</Typography>
						</Box>
					</Paper>
				</Grid>
				<Grid item xs={12} md={7}>
					<Typography variant='h6' gutterBottom>
						Адрес доставки и оплата
					</Typography>
					<Box component='form' onSubmit={handleSubmit} noValidate>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}> <TextField required fullWidth id='firstName' name='firstName' label='Имя' /> </Grid>
							<Grid item xs={12} sm={6}> <TextField required fullWidth id='lastName' name='lastName' label='Фамилия' /> </Grid>
							<Grid item xs={12}> <TextField required fullWidth id='address1' name='address1' label='Адрес' /> </Grid>
							<Grid item xs={12}> <TextField required fullWidth id='cardNumber' name='cardNumber' label='Номер карты' /> </Grid>
						</Grid>
						<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2, backgroundColor: 'black', '&:hover': { backgroundColor: '#333' } }} >
							Оплатить
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	)
}

export default CheckoutPage
