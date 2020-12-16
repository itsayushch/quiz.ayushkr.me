import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import { Link } from 'react-router-dom';

import { Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

import Loader from './Loader';
import { ThemeContext } from "../theme/Provider";
import { getStyles } from "../theme/theme";

export default class QuizComponent extends Component {
	constructor() {
		super();
		this.state = {
			submitted: false,
			questions: '',
			isLoaded: false
		}
	}

	static contextType = ThemeContext;

	componentDidMount() {
		fetch(`https://opentdb.com/api.php?amount=5&type=multiple`).then(d => d.json())
			.then(questions => this.setState({ questions, isLoaded: true }))
	}

	handleMarks = (mark) => {
		if ([0, 1].includes(mark)) return 'rgba(255, 0, 0, 0.3)';
		else if ([2, 3].includes(mark)) return 'rgba(255, 255, 0, 0.3)';
		else return 'rgba(0, 255, 0, 0.3)';
	}

	handleSubmit = e => {
		this.setState({
			submitted: true
		})
		e.preventDefault();
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	}

	htmlDecode(input) {
		var doc = new DOMParser().parseFromString(input, "text/html");
		return doc.documentElement.textContent;
	}

	render() {
		const { div, color } = getStyles(this.context.mode);
		const { questions, isLoaded } = this.state;
		if (!this.state.submitted) {
			if (!isLoaded) {
				return (
					<>
						<Loader />
					</>
				);
			}
			return (
				<div style={{ color: div.color }}>
					<br /><br /><br />
					<h1 style={{ textAlign: 'center', color }}>Questions</h1>
					<form onSubmit={this.handleSubmit}>
						{questions.results.map(n => {
							return (
								<>
									<div className="shadow-lg p-3 mb-5 rounded form" style={{ background: div.bg.replace(/linear-gradient|[(]|[)]/g, '').split(/, +/g)[0] }}>
										<h4>{this.htmlDecode(n.question)}</h4><br />
										<div className="question">
											{n.incorrect_answers.concat(n.correct_answer).map(m => {
												return (
													<>
														<Form.Check
															custom
															type="radio"
															label={this.htmlDecode(m)}
															id={m.toLowerCase()}
															value={m.toLowerCase()}
															name={String(n.correct_answer)}
															onChange={this.handleChange}
															required
															style={{ color }}
														/>
														<br />
													</>
												);
											})}
										</div>
									</div>
								</>
							)
						})}
						<Button variant="contained" color="primary" type="submit" style={{ width: '45%' }}>Submit</Button>&nbsp;
						<Button variant="contained" color="secondary" style={{ width: '45%', float: 'right' }} onClick={() => window.location.assign('/')}>Return Home</Button>
					</form>
				</div>
			);
		} else {
			const responses = Object.values(this.state);
			let ans = [];
			let count = 0;
			let correct = 0;
			for (const a of responses.slice(3)) {
				if (String(a).toLowerCase() === questions.results[count].correct_answer.toLowerCase()) {
					ans.push({
						type: 'green',
						msg: <>
							<h4 style={{ color: div.color }}><strong>Q:</strong> {this.htmlDecode(questions.results[count].question)}</h4> <br /><br />
							<li style={{ background: 'rgba(0, 255, 0, 0.3)', color, borderRadius: '15em', minWidth: '100px', display: 'inline-block' }} className="list-group-item">
								<b>{this.htmlDecode(a).toUpperCase()}</b> is the correct answer
							</li>
						</>
					});
					correct++;
				}
				else {
					ans.push({
						type: 'red',
						msg: (
							<>
								<h4 style={{ color: div.color }}><strong>Q:</strong> {this.htmlDecode(questions.results[count].question)}</h4> <br />
								<li style={{ background: 'rgba(255, 0, 0, 0.3)', color, borderRadius: '15em', minWidth: '100px', display: 'inline-block' }} className="list-group-item">
									<b>{this.htmlDecode(a).toUpperCase()}</b> is the wrong answer.
								</li><br /><br />
								<li style={{ background: 'rgba(0, 255, 0, 0.3)', color, borderRadius: '15em', minWidth: '100px', display: 'inline-block' }} className="list-group-item">
									The correct answer is: <b>{this.htmlDecode(questions.results[count].correct_answer).toUpperCase()}</b>
								</li>
							</>
						)
					});
					count++;
				}
			}
			return (
				<>
					<br /><br /><br />
					<h1 style={{ textAlign: 'center' }}>Answers</h1>
					<br /><br />
					<center>
						<span>
							<li style={{ background: this.handleMarks(correct), color, borderRadius: '15em', minWidth: '100px', display: 'inline-block', textAlign: 'left' }} className="list-group-item">
								Marks: {correct}/5
							</li>
						</span>
					</center>
					<form>
						{ans.map(m => {
							return (
								<div class={`shadow-lg p-3 mb-5 rounded border-3 form`} style={{ borderColor: m.type, background: div.bg.replace(/linear-gradient|[(]|[)]/g, '').split(/, +/g)[0] }}>
									{m.msg}
								</div>
							);
						})}

						<div style={{ display: 'flex', flexDirection: 'row' }}>
							<Button variant="contained" color="primary" component={Link} to='/quiz' type="submit" style={{ width: '35%' }}>Try New Quiz</Button>&nbsp;
							<Button variant="contained" color="secondary" style={{ width: '35%', float: 'right' }} onClick={() => this.setState({ submitted: false })}>Retry Same Quiz</Button>&nbsp;
							<Button variant="contained" color="primary" component={Link} to='/' type="submit" style={{ width: '35%' }}>Home</Button>&nbsp;
						</div>

					</form>
				</>
			);
		}
	}
}