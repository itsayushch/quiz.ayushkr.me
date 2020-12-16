import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../theme/Provider';
import { getStyles } from '../theme/theme';
import { Image } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { instructions } from '../assests/instructions';

class Lander extends Component {
	static contextType = ThemeContext;

	constructor() {
		super();
		this.state = { offset: 0 };
	}

	componentDidMount() {
		document.title = 'Quizora';
	}

	render() {
		const { div, backgroundColor: background, color, list } = getStyles(this.context.mode);
		return (
			<div style={{ background, color, margin: 0, paddingBottom: 0 }}>
				<br /><br />
				<div className='container-fluid hero' style={{ textAlign: 'center', padding: 40, background: div.bg, color: div.color }}>
					<div className='row'>
						<div className='col-sm'>
							<Image
								src={require('../assests/quizora.svg')}
								style={{ textAlign: 'center' }}
								className='img-fluid animated'
							/>

						</div>
						<div className='col-sm' style={{
							textAlign: 'center',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column'
						}}>
							<h1><b>{'Quizora'.toUpperCase()}</b></h1>
							<p> </p>
							<h2>Smooth and flexible Quiz Application</h2>
							<h5 style={{ color: div.color2 }}>
								This Site Generates 5 random questions with multiple options. You need to choose one option for each question and submit the form. <br />
                                    Once you submit the form. The website will show you the answers for all the questions that you attempted.
                                </h5>
							<p> </p><p> </p>
							<Button className='btn' component={Link} to='/quiz' variant='contained' style={{ width: '15em', background: div.button, color: background, borderRadius: '15em' }}>Explore</Button>&nbsp;
                            </div>
					</div>
				</div>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
					<path fill={div.svg} fillOpacity='1' d='M0,160L48,138.7C96,117,192,75,288,58.7C384,43,480,53,576,74.7C672,96,768,128,864,133.3C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path>
				</svg>
				<h1 style={{ textAlign: 'center' }}>Instructions</h1>
				<br /><br /><br />
				<center>
					<ul style={{ width: '90%', textAlign: 'left', padding: 0 }}>
						{instructions.map((m, i) => {
							return (
								<>
									<li style={{ background: i % 2 === 0 ? list[0] : list[1], color, borderRadius: '15em' }} className="list-group-item">
										<b>Step {++i}:</b> {m}
									</li>
									<br />
								</>
							);
						})}
					</ul>
				</center>
			</div>
		);
	}
}

export default Lander;