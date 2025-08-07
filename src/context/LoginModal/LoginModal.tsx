import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import styles from './LoginModal.module.css'

interface LoginModalProps {
	open: boolean
	onClose: () => void
}

const LoginModal = ({ open, onClose }: LoginModalProps) => {
	const [step, setStep] = useState<'email' | 'password'>('email')
	const [email, setEmail] = useState('')
	const [code, setCode] = useState('')
	const { login } = useAuth()
	const handleEmailSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		if (email.trim()) {
			console.log(`Запрос кода для: ${email}`)
			setStep('code')
		}
	}

	const handleCodeSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		if (code.trim() === '123') {
			login(email)
			handleClose()
		} else {
			alert('Неверный код! Попробуйте 123 :)')
			setCode('')
		}
	}

	const handleBack = () => {
		setCode('')
		setStep('email')
	}

	const handleClose = () => {
		onClose()
		setTimeout(() => {
			setStep('email')
			setEmail('')
			setCode('')
		}, 700)
	}

	return (
		<Modal open={open} onClose={handleClose}>
			<Box className={styles.modalBox}>
				{step === 'email' ? (
					<>
						<Typography variant='h6' component='h2'>
							Вход или регистрация
						</Typography>
						<Box
							component='form'
							onSubmit={handleEmailSubmit}
							className={styles.loginForm}
						>
							<TextField
								fullWidth
								margin='normal'
								label='Email'
								name='email'
								id='email'
								type='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
								autoFocus
								required
							/>
							<Button
								type='submit'
								variant='contained'
								fullWidth
								className={styles.loginButton}
							>
								Получить код
							</Button>
						</Box>
					</>
				) : (
					<>
						<Typography variant='h6' component='h2'>
							Подтверждение
						</Typography>
						<Typography
							variant='body2'
							sx={{ mt: 1, mb: 2, color: 'grey.700' }}
						>
							Мы отправили псевдо-код на <strong>{email}</strong>
						</Typography>
						<Box
							component='form'
							onSubmit={handleCodeSubmit}
							className={styles.loginForm}
						>
							<TextField
								fullWidth
								margin='normal'
								label='Псевдо-код'
								name='code'
								id='code'
								type='text'
								value={code}
								onChange={e => setCode(e.target.value)}
								autoFocus
								required
							/>
							<Button
								type='submit'
								variant='contained'
								fullWidth
								className={styles.loginButton}
							>
								Подтвердить
							</Button>
						</Box>
						<Button
							onClick={handleBack}
							size='small'
							sx={{ mt: 2, textTransform: 'none' }}
						>
							Назад
						</Button>
					</>
				)}
			</Box>
		</Modal>
	)
}

export default LoginModal
