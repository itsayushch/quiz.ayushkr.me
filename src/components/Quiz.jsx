import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

import { Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

import Loader from './Loader';

export class Quiz extends Component {
	constructor() {
		super();
		this.state = {
			submitted: false,
			questions: '',
			isLoaded: false
		}
	}

	componentDidMount() {
		fetch(`https://opentdb.com/api.php?amount=5&type=multiple`).then(d => d.json())
			.then(questions => this.setState({ questions, isLoaded: true }))
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
		const { questions, isLoaded } = this.state;
		if (!this.state.submitted) {
			if (!isLoaded) {
				return <Loader />;
			}
			return (
				<div>
					<h1 style={{ textAlign: 'center' }}>Questions</h1>
					<form onSubmit={this.handleSubmit}>
						{questions.results.map(n => {
							return (
								<>
									<div class="shadow-lg p-3 mb-5 bg-white rounded">
										<h4>{this.htmlDecode(n.question)}</h4>
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
															name={n.correct_answer}
															onChange={this.handleChange}
															required
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
			console.log(responses);
			let ans = [];
			let count = 0;
			for (const a of responses.slice(3)) {
				if (String(a.toLowerCase()) === questions.results[count].correct_answer.toLowerCase()) {
					ans.push({
						color: 'success',
						msg: <>
							Q - {this.htmlDecode(questions.results[count].question)} <br /><br />
							<b>{this.htmlDecode(a).toUpperCase()}</b> is the correct answer
						</>
					});
					count++;
				}
				else {
					ans.push({
						color: 'danger',
						msg: (
							<>
								Q - {this.htmlDecode(questions.results[count].question)} <br /><br />
								<b>{this.htmlDecode(a).toUpperCase()}</b> is the wrong answer. <br /><br />
								The correct answer is: <span style={{ color: 'rgb(37, 194, 160)' }}>{this.htmlDecode(questions.results[count].correct_answer).toUpperCase()}</span>
							</>
						)
					});
					count++;
				}
			}
			return (
				<>
					<h1 style={{ textAlign: 'center' }}>Answers</h1>
					<form>
						{ans.map(m => {
							return (
								<div class={`shadow-lg p-3 mb-5 bg-${m.color} rounded`}>
									<h5>{m.msg}</h5>
								</div>
							);
						})}
						<Button variant="contained" color="secondary" onClick={() => window.location.assign('/') }>Go Back</Button>
					</form>
				</>
			);
		}
	}
}