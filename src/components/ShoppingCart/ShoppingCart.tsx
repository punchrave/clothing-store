import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import RemoveIcon from '@mui/icons-material/Remove'
import {
	Avatar,
	Box,
	Button,
	Container,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import type { Product } from '../../data/products'
import {
	addToCart,
	type CartItem,
	decrementQuantity,
	removeFromCart,
} from '../../store/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

const parsePrice = (price: string): number => {
	const numericString = price.replace(/[^\d.]/g, '')
	return parseFloat(numericString) || 0
}

const ShoppingCart = () => {
	const dispatch = useAppDispatch()
	const cartItems = useAppSelector(state => state.cart.items)

	const totalPrice = cartItems.reduce((total, item) => {
		return total + parsePrice(item.price) * item.quantity
	}, 0)

	const handleIncrement = (product: Product, size: string) => {
		dispatch(addToCart({ product, size }))
	}

	const handleDecrement = (id: number, size: string) => {
		dispatch(decrementQuantity({ id, size }))
	}

	const handleRemove = (id: number, size: string) => {
		dispatch(removeFromCart({ id, size }))
	}

	return (
		<Container>
			<Typography variant='h4' component='h1' gutterBottom>
				Корзина
			</Typography>
			{cartItems.length === 0 ? (
				<Typography variant='body1'>Ваша корзина пуста</Typography>
			) : (
				<>
					<List>
						{cartItems.map((item: CartItem) => (
							<ListItem key={`${item.id}-${item.selectedSize}`} divider>
								<ListItemAvatar>
									<Avatar
										src={item.imageUrls[0]}
										alt={item.name}
										variant='square'
									/>
								</ListItemAvatar>
								<ListItemText
									primary={item.name}
									secondary={`Размер: ${item.selectedSize} | Цена: ${item.price}`}
								/>
								<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
									<IconButton
										onClick={() => handleDecrement(item.id, item.selectedSize)}
									>
										<RemoveIcon />
									</IconButton>
									<Typography>{item.quantity}</Typography>
									<IconButton
										onClick={() => handleIncrement(item, item.selectedSize)}
									>
										<AddIcon />
									</IconButton>
									<IconButton
										onClick={() => handleRemove(item.id, item.selectedSize)}
									>
										<DeleteIcon />
									</IconButton>
								</Box>
							</ListItem>
						))}
					</List>
					<Divider sx={{ my: 2 }} />
					<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
						<Typography variant='h5'>Итоговая цена:</Typography>
						<Typography variant='h5'>
							{totalPrice.toLocaleString('ru-RU')} руб.
						</Typography>
					</Box>
					<Button component={Link}
						to='/checkout' variant='contained' fullWidth sx={{ mt: 2 }}>
						Оформить заказ
					</Button>
				</>
			)}
		</Container>
	)
}

export default ShoppingCart
