import React, { Component } from 'react';

import ShardButton from "../ShardButton/shard-button";

import "./shard-form.scss"

class ShardForm extends Component {
    render() {
        const {
            flex, type, button_style, column, size, parent_class
        } = this.props;

        const baseClass = 'component-form';
        const classNames = [baseClass];
        let parentClass = 'component-form__form__item';

        if(parent_class) {
            parentClass = 'component-form__form__item-wight';
        }

        if(column) {
            classNames.push(`${baseClass}__column`);
        }

        if(flex) {
            classNames.push(`${baseClass}__flex`);
        }

        const className = classNames.join(' ');

        if(type === 'login') {
            return (
                <div className={className}>
                    <div className="component-form__item">
                        <label className="component-form__item__label">Email</label>
                        <input className="component-form__item__input" type="text" autoComplete="on" />
                    </div>
                    <div className="component-form__item">
                        <label className="component-form__item__label">Password</label>
                        <input className="component-form__item__input" type="password"/>
                    </div>
                    <div className={parentClass}>
                        <ShardButton type="submit" text={"Войти"} style={button_style} size={size}/>
                    </div>
                </div>
            );
        }

        if(type === 'register') {
            return (
                <div className={className}>
                    <div className="component-form__item">
                        <label className="component-form__item__label">Email</label>
                        <input className="component-form__item__input" type="text" autoComplete="on" />
                    </div>
                    <div className="component-form__item">
                        <label className="component-form__item__label">Username</label>
                        <input className="component-form__item__input" type="text" autoComplete="on" />
                    </div>
                    <div className="component-form__item">
                        <label className="component-form__item__label">Password</label>
                        <input className="component-form__item__input" type="password"/>
                    </div>
                    <div className="component-form__item">
                        <label className="component-form__item__label">Repeat Password</label>
                        <input className="component-form__item__input" type="password"/>
                    </div>
                    <div className={parentClass}>
                        <ShardButton type="submit" text={"Зарегистрироваться"} style={button_style} size={size}/>
                    </div>
                </div>
            );
        }
    }
}

export default ShardForm;