import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import $ from "jquery";

import RouterStore from "../../../store/route";

import Form from "../../fragments/forms/shard-form";
import Button from "../../fragments/button/shard-button";
import Carrier from "managers/carrier";

import './layout-login.scss';
import ShardButton from "components/fragments/button/shard-button";

class LayoutLogin extends Component {
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {};
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { email, password } = this.state;
        const { storage } = this.props;

        const payload = {
            email,
            password,
        };

        const baseClass = 'login__form-errors';

        const $target = $(event.target);
        const action = $target.attr('action');

        const inputGroupSelector = `[class="${baseClass}"]`;

        if (!(email && password)) {
            $(inputGroupSelector).text('Заполните поле');
            $(inputGroupSelector).addClass(errorMod);
            return;
        }

        console.log(payload);
        Carrier.post(action, { payload }).then((body) => {
            console.log(body);
            this.props.history.push('/home/');
        });
    }

    render() {

        return (
            <div className="component-layout__content">
                <div className="layout-login">
                    <svg viewBox="0 0 24 24"
                         className="login__twitter-logo">
                        <g>
                            <path
                                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                        </g>
                    </svg>
                    <div className="login__title">
                        Войти в Твиттер
                    </div>
                    <div className="login__form-errors"></div>
                    <form action={RouterStore.api.user.login} onSubmit={this.handleSubmit}>
                        <div className="component-form component-form__column">
                            <div className="component-form__item">
                                <label className="component-form__item__label">Email</label>
                                <input className="component-form__item__input" type="email" name="email" autoComplete="on" onChange={this.handleEmailChange}/>
                            </div>
                            <div className="component-form__item">
                                <label className="component-form__item__label">Password</label>
                                <input className="component-form__item__input" name="password" type="password" onChange={this.handlePasswordChange}/>
                            </div>
                            <div className="component-form__form__item component-form__form__item-wight">
                                <ShardButton type="submit" text={"Войти"} style={'primary'} size={'big'}/>
                            </div>
                        </div>
                    </form>
                    <div className="login__links">
                        <Button to={RouterStore.website.register} text={'Забыли пароль?'} />
                        <Button to={RouterStore.website.register} text={'Зарегестрироваться в Твиттере'} />
                    </div>
                </div>
            </div>
        );

    }
}
export default withRouter(LayoutLogin);