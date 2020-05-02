import React, { Component } from 'react';

import "./header-item.scss";

class HeaderItem extends Component {
    render() {
        const { text, style, svg, href } = this.props;

        const baseClass = 'component-header-item';
        const classNames = [baseClass];


        if(style === "current") {
            classNames.push(`${baseClass}__current`)
        }

        const className = classNames.join(' ');

        return(
            <a href={href} className={className}>
                <svg viewBox="0 0 24 24"
                     className="component-header-item__svg">
                    <g>
                        <path
                            d={svg}></path>
                    </g>
                </svg>
                <span className="component-header-item__span"> {text} </span>
            </a>
        );
    }
}

export default HeaderItem;