import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'
import PersonIcon from '@mui/icons-material/Person'
import {
	AppBar,
	Badge,
	Box,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import LoginModal from '../../context/LoginModal/LoginModal.tsx'
import { useAppSelector } from '../../store/hooks'
import styles from './Header.module.css'

const Header = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { user, logout } = useAuth()
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const isMenuOpen = Boolean(anchorEl)

	const cartItems = useAppSelector(state => state.cart.items)
	const totalItemsInCart = cartItems.reduce(
		(sum, item) => sum + item.quantity,
		0
	)

	const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
		if (user) {
			setAnchorEl(event.currentTarget)
		} else {
			setIsModalOpen(true)
		}
	}

	const handleCloseMenu = () => {
		setAnchorEl(null)
	}

	const handleLogout = () => {
		logout()
		handleCloseMenu()
	}

	return (
		<>
			<AppBar position='static' color='inherit' className={styles.headerAppBar}>
				<Toolbar>
					<Typography
						variant='h6'
						component='div'
						className={styles.headerLogo}
					>
						<Link to='/' className={styles.logoLink}>
							SolutionS
						</Link>
					</Typography>
					<Box sx={{ flexGrow: 1 }} />
					<Box className={styles.iconContainer}>
						<IconButton
							color='inherit'
							aria-label='profile'
							onClick={handleProfileClick}
						>
							<PersonIcon fontSize='large' />
						</IconButton>
						<IconButton component={Link} to='/cart' color='inherit' aria-label='shopping cart'>
							<Badge badgeContent={totalItemsInCart} color='error'>
								<ShoppingCartIcon fontSize='large' />
							</Badge>
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>

			<Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleCloseMenu}>
				<MenuItem disabled>Профиль:{user?.email}</MenuItem>
				<MenuItem onClick={handleLogout}>Выйти</MenuItem>
			</Menu>
			{!user && (
				<LoginModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
			)}
		</>
	)
}

export default Header
