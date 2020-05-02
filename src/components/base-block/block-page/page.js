import React, { Component } from 'react';

import LeftBar from "../block-left-bar/left-bar";
import RightBar from "../block-right-bar/right-bar";

import "./page.scss"

class Page extends Component {
    render() {
        const { layout } = this.props;
        return (
            <div className="component-layout__shard">
                <LeftBar layout={layout}/>
                <div className="layout__content-wrap">
                    <div className="content">

                    </div>
                </div>
                <RightBar />
            </div>
        );
    }
}
export default Page;