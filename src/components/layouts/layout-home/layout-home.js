import React, { Component } from 'react';

import Page from "../../base-block/block-page/page";

import "./layout-home.scss"

class LayoutHome extends Component {
    render() {
        const { layout } = this.props;
        return(
            <Page layout={layout}></Page>
        );
    }
}
export default LayoutHome;