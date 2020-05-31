import React, { Component } from 'react';

import LeftBar from "../block-left-bar/left-bar";
import RightBar from "../block-right-bar/right-bar";

import "./page.scss"

class Page extends Component {
    render() {
        const { layout, storage } = this.props;
        return (
            <div className="component-layout__shard">
                <LeftBar layout={layout} storage={storage}/>
                <div className="component__content-wrap">
                        { this.props.children }
                </div>
                <RightBar />
            </div>
        );
    }
}
export default Page;