import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './shard-button.scss';

class ShardButton extends Component {
    render() {
        const {
            type, style, to, text, size
        } = this.props;
        const baseClass = 'component-button';
        const classNames = [baseClass];

        if(size === 'big') {
            classNames.push(`${baseClass}__big`);
        }
        if (style === 'secondary') {
            classNames.push(`${baseClass}__secondary`);
        }

        if (style === 'primary') {
            classNames.push(`${baseClass}__primary`);
        }

        const className = classNames.join(' ');

        if (type === 'submit') {
            return (
                <input type="submit" className={className} value={text} />
            );
        }

        return (
            <Link to={to} className={className}>{text}</Link>
        );
    }
}

export default ShardButton;