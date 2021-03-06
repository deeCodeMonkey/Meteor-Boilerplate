﻿import React, { Component } from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends Component {

    state = {
        error: ''
    }

    onSubmit = (e) => {
        e.preventDefault();

        let email = e.target.email.value.trim();
        let password = e.target.password.value.trim();

        if (password.length < 6) {
            return this.setState({ error: 'Password must be at least 6 characters long.' });
        }

        Accounts.createUser({ email, password }, (err) => {
            if (err) {
                this.setState({ error: err.reason });
            } else {
                this.setState({ error: '' });
            }
        });
    }

    render() {
        return (
            <div className="boxed-view">
                <div className="boxed-view__box">
                    <h1>Join</h1>

                    {this.state.error ? <p>{this.state.error}</p> : undefined}

                    <form onSubmit={this.onSubmit} noValidate className="boxed-view__form">
                        <input type="email" name="email" placeholder="Email" />
                        <input type="password" name="password" placeholder="Password" />
                        <button className="button">Create Account</button>
                    </form>

                    <Link to="/">Already have an account?</Link>
                </div>
            </div>
        );
    }
}