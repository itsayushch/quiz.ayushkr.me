import React, { Component } from 'react';
import { ThemeContext } from "../theme/Provider";
import { getStyles } from '../theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faDiscord, faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {

	static contextType = ThemeContext;

	render() {
		const { div, color } = getStyles(this.context.mode);
		return (
			<div style={{ color: div.color }}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<defs>
						<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
							<stop offset="20%" style={{ stopColor: div.bg.replace(/linear-gradient|[(]|[)]/g, '').split(/, +/g)[1], stopOpacity: 1 }} />
							<stop offset="80%" style={{ stopColor: div.bg.replace(/linear-gradient|[(]|[)]/g, '').split(/, +/g)[0], stopOpacity: 1 }} />
						</linearGradient>
					</defs>
					<path fill={div.bg.replace(/linear-gradient|[(]|[)]/g, '').split(/, +/g)[0]} fillOpacity="1" d="M0,256L48,245.3C96,235,192,213,288,192C384,171,480,149,576,165.3C672,181,768,235,864,245.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
				</svg>
				<div className='container-fluid' style={{ fontFamily: `'Varela Round', sans-serif`, margin: 0, background: div.bg.replace(/linear-gradient|[(]|[)]/g, '').split(/, +/g)[0], marginTop: 2, textAlign: 'center', paddingTop: 6, paddingBottom: 6 }}>
					<span style={{ color }}>&copy; {new Date().getFullYear()}</span> <strong><a href="https://ayushkr.me" target='_blank' rel='noopener noreferrer'>Ayush CH</a></strong><br /><br />
					<span style={{ color }}>
						This site is early Alpha stage and is supposed to have lots of bugs, issues and missing features.<br />
						If you find any bugs or want new features, please feel free to inform me.<br /><br />
						If you want to contribute to the site, you are most welcome.<br />
						You can contribute to the open source repository which is available on <strong><a href="https://github.com/itsayushch/quiz.ayushkr.me" target='_blank' rel='noopener noreferrer'><span style={{ color: div.color }}> GitHub</span></a></strong>.
        	</span>
				</div>
				<div className='container-fluid' style={{
					margin: 0, background: div.bg.replace(/linear-gradient|[(]|[)]/g, '').split(/, +/g)[0], marginTop: 2, height: '12vh',
					textAlign: 'center',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'left',
					flexDirection: 'column',
					padding: 50
				}}>
					<div className='row'>
						<div className='col-sm' style={{
							textAlign: 'center',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column'
						}}>
								<span style={{ fontSize: 35 }}>
									<FontAwesomeIcon icon={faEnvelope} id='icon' onClick={() => window.open('mailto:ayush.chowdhury2004@gmail.com')} />&nbsp;&nbsp;
                	<FontAwesomeIcon icon={faGithub} id='icon' onClick={() => window.open('https://github.com/itsayushch/')} />&nbsp;&nbsp;
                	<FontAwesomeIcon icon={faFacebook} id='icon' onClick={() => window.open('https://www.facebook.com/ayushkr004/')} />&nbsp;&nbsp;
                	<FontAwesomeIcon icon={faDiscord} id='icon' onClick={() => window.open('https://discord.gg/sY57ftY')} />&nbsp;&nbsp;
                	<FontAwesomeIcon icon={faInstagram} id='icon' onClick={() => window.open('https://www.instagram.com/ayushkr.me/')} />
								</span>
						</div>
					</div>
				</div>
			</div >
		)
	}
}

export default Footer;