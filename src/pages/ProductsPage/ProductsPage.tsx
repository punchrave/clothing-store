import { useState } from 'react';
import { Box, Typography, Grid, List, ListItem, ListItemButton, ListItemText, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import {mockProducts,categories} from '../../data/products'

const ProductsPage = () => {
	const [selectedCategory,setSelectedCategory]=useState('All')

	const handleCategoryClick=(category:string)=>{
		setSelectedCategory(category)
	}

	const filteredProducts=selectedCategory==='All'?mockProducts:mockProducts.filter(product=>product.category===selectedCategory)

	return (
		<>
		<Box sx={{p:3}}>
			<Box sx={{display: 'flex', justifyContent: 'center', mb: 4}}>
				<List sx={{ display: 'flex', flexDirection: 'row', p: 0, gap: 1 }}> 
					{categories.map(category=>(
						<ListItem key={category} disablePadding>
							<ListItemButton sx={{background:'none',color:'black'}}  onClick={()=>handleCategoryClick(category)} selected={category===selectedCategory}>
								<ListItemText primary={category}/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
		</Box>

		<Box sx={{ flexGrow: 1, pb: 3 }}>
			<Grid container spacing={2}>
				{filteredProducts.map(product=>(
					<Grid item xs={12} sm={6} md={2.4} key={product.id}>
						<Card sx={{height:'100%',display:'flex',flexDirection:'column'}}> <CardActionArea component={Link} to={`/products/${product.id}`} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
						<CardMedia component='img' height='350' image={product.imageUrls[0]} alt={product.name} sx={{ objectFit: 'cover' }} />
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography gutterBottom variant="h5" component="div">{product.name}</Typography>
							<Typography variant="body1" color="text.secondary">{product.price}</Typography>
							</CardContent>
						</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>


		</>
	)
}

export default ProductsPage