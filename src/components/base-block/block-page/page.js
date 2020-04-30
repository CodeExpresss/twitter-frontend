import React, { Component } from 'react';

import LeftBar from "../block-left-bar/left-bar";

import "./page.scss"

class Page extends Component {
    render() {
        return (
            <div className="component-layout__shard">
                <LeftBar />
                <div className="layout__right-bar">

                </div>
            </div>
        );
    }
}
export default Page;