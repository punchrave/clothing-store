import {
	AppBar,
	Box,
	Button,
	Grid,
	Link,
	TextField,
	Toolbar,
	Typography,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import styles from './Footer.module.css'

const footerSections = [
	{
		title: 'Основное',
		links: [
			{ text: 'Каталог', path: '/products' },
			{ text: 'Вакансии', path: '/vacancies' },
			{ text: 'Архив', path: '/archive' },
		],
	},
	{
		title: 'Клиентский сервис',
		links: [
			{ text: 'Доставка и оплата', path: '/delivery' },
			{ text: 'Возврат', path: '/returns' },
			{ text: 'Контакты', path: '/contacts' },
		],
	},
	{
		title: 'О нас',
		links: [
			{ text: 'Телеграм', path: '/tg' },
			{ text: 'Магазины', path: '/stores' },
		],
	},
	{
		title: 'Свежие новости',
		links: [
			{ text: 'Блог', path: '/blog' },
			{ text: 'Пресса о нас', path: '/press' },
		],
	},
]

const Footer = () => {
	return (
		<AppBar
			
			position='static'
			color='inherit'
			component='footer'
			className={styles.footerAppBar}
			elevation={0}
		>
			<Toolbar>
				<Grid container spacing={4} justifyContent='space-between'>
					{footerSections.map(section => (
						<Grid item xs={12} sm={6} md={2} key={section.title}>
							<Typography variant='h6' className={styles.footerTitle}>
								{section.title}
							</Typography>
							<Box component='ul' className={styles.linkList}>
								{section.links.map(linkItem => (
									<Box component='li' key={linkItem.text} className={styles.linkItem}>
										<Link
											component={RouterLink}
											to={linkItem.path}
											className={styles.footerLink}
										>
											{linkItem.text}
										</Link>
									</Box>
								))}
							</Box>
						</Grid>
					))}
					<Grid item xs={12} md={4}>
						<Typography variant='h6' className={styles.footerTitle}>
							Будьте в курсе
						</Typography>
						<Typography variant='body2' className={styles.subscriptionText}>
							Подпишитесь на рассылку, чтобы первыми узнавать о новинках и
							акциях.
						</Typography>
						<Box component='form' className={styles.subscriptionForm}>
							<TextField label='Ваш Email' variant='outlined' size='small' fullWidth/>
							<Button variant='contained' type='submit' className={styles.subscribeButton}>
								Подписаться
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}

export default Footer
