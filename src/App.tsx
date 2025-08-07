import { Box, Container, CssBaseline } from '@mui/material'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import Footer from './components/Footer/Footer'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
function App() {
	return (
		<Router>
			<CssBaseline />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100vh',
					bgcolor: '#fffefeff',
				}}
			>
				<Header />
				<Container
					component='main'
					sx={{ width: '80%', mt: 4, flexGrow: 1, px: 3 }}
				>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/products' element={<ProductsPage />} />
						<Route path='/products/:id' element={<ProductDetailPage />} />
						<Route path='/cart' element={<ShoppingCart/>}/>
						<Route path='/checkout' element={<CheckoutPage />} />
					</Routes>
				</Container>
				<Footer />
			</Box>
		</Router>
	)
}

export default App
