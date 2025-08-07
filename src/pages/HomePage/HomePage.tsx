import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import collectionImage from '../../image/10-1752575614121.jpg'
import styles from './HomePage.module.css'

const HomePage = () => {
	return (
		<Card className={styles.heroCard} elevation={0}>
			<CardActionArea component={RouterLink} to='/products'>
				<CardMedia
					component='img'
					image={collectionImage}
					alt='Коллекция одежды'
					className={styles.heroImage}
				/>
				<CardContent>
					<Typography component='div'
						className={styles.heroTitle}
					>
						SOLUTIONS
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default HomePage
