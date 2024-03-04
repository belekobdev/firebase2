import { AccountCircle } from '@mui/icons-material'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import SearchIcon from '@mui/icons-material/Search'
import { Avatar, Menu, MenuItem } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { alpha, styled } from '@mui/material/styles'
import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
import { useProductContext } from '../../context/ProductContext'
const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	width: '100%',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}))

export default function Header() {
	const navigate = useNavigate()
	const { product, readProduct } = useProductContext()
	const { user } = useAuthContext()
	React.useEffect(() => {
		readProduct()
	}, [product])
	const [auth, setAuth] = React.useState(true)
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleChange = event => {
		setAuth(event.target.checked)
	}

	const handleMenu = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar
					sx={{
						background: '#181818',
						display: ' flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: '50px',
						}}
					>
						<IconButton
							onClick={() => navigate('/admin')}
							size='large'
							edge='start'
							color='inherit'
							aria-label='open drawer'
							sx={{ mr: 2 }}
						>
							<AdminPanelSettingsIcon />
						</IconButton>
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
						>
							Home
						</Typography>
						<Link to={'/menu'}>
							<Box
								sx={{
									position: 'relative',
								}}
							>
								<Typography
									sx={{
										position: 'absolute',
										display: product.length === 0 ? 'none' : 'block',
										left: '50px',
										top: '-10px',
										width: '25px',
										height: '25px',
										background: 'red',
										borderRadius: '50%',
										textAlign: 'center',
										lineHeight: '25px',
										fontWeight: '600',
									}}
								>
									{product.length}
								</Typography>
								<Typography
									variant='h6'
									noWrap
									component='div'
									sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
								>
									Menu
								</Typography>
							</Box>
						</Link>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
						<Search>
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase
								placeholder='Search…'
								inputProps={{ 'aria-label': 'search' }}
							/>
						</Search>
						{user ? (
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleMenu}
								color='inherit'
							>
								<Avatar
									sx={{
										objectFit: 'cover',
										width: '40px',
										height: '40px',
										borderRadius: '50%',
									}}
									title={user.displayName}
									src={user.photoURL}
									alt={user.displayName}
								/>
							</IconButton>
						) : (
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleMenu}
								color='inherit'
							>
								<AccountCircle />
							</IconButton>
						)}
						<Menu
							id='menu-appbar'
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem
								onClick={() => {
									handleClose()
									navigate('/register')
								}}
							>
								Sign in
							</MenuItem>
							<MenuItem
								onClick={() => {
									handleClose()
									navigate('/sign')
								}}
							>
								Sign up
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
