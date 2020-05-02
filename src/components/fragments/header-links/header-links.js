import React, { Component } from 'react';

import HeaderItem from "../header-item/header-item";
import HeaderLinksStore from "../../../store/header-links";

class HeaderLinks extends Component {
    render() {
        const { layout } = this.props;

        return (
            <>
                {
                    Object.values(HeaderLinksStore).map(({ key, href, svg, text }) => (
                        <HeaderItem key={key} href={href} text={text} svg={svg} style={ layout === key ? "current" : null } />
                        ))
                }
            </>
        );
    }
}

export default HeaderLinks;