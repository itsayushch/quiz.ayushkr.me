import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ThemeSwitch from './ToggleSwitch';
import { ThemeContext } from '../theme/Provider';
import { getStyles } from '../theme/theme';

class TopNav extends Component {
	constructor() {
		super();
		this.state = { scrollY: 0 };
	}

	static contextType = ThemeContext;

	onScroll = () => {
		this.setState({ scrollY: window.scrollY });
	}

	scrollTo = () => {
		window.scrollTo(0, 743);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	render() {
		const { nav } = getStyles(this.context.mode);
		return (
			<>
				<Navbar
					variant={nav.variant}
					expand='lg'
					fixed={'top'}
					style={{ background: nav.bg }}
					className={this.state.scrollY > 1 ? 'shadow-lg' : ''}
				>
					<Navbar.Brand as={Link} to='/'>
						<img
							alt=''
							src={require('../assests/quizora.svg')}
							width='30'
							height='30'
							className='d-inline-block align-top'
						/>{' '}
						Quizora
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<Nav.Link as={Link} to='/' onClick={this.scrollTo}>Instructions</Nav.Link>
							<Nav.Link as={Link} to='/quiz'>Quiz</Nav.Link>
						</Nav>
						<Nav>
							<ThemeSwitch />
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</>
		);
	}
}
export default TopNav;