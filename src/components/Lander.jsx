import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lander extends Component {
    render() {
        return (
            <>
                <form style={{ textAlign: "center" }}>
                    <h1>Quiz App</h1> <br />
                    <div className="alert alert-success" role="alert">
                        <h4>Welcome to Ayush CH's Quiz App</h4> <br />

                        This Site Generates 5 random questions with multiple options. You need to choose one option for each question and submit the form. <br />
                        <hr />
                        Once you submit the form. The website will show you the answers for all the questions that you attempted.
                    </div>
                    <Link className="btn btn-primary" to="/quiz" role="button">Get Started</Link>
                </form>
            </>
        );
    }
}

export default Lander;