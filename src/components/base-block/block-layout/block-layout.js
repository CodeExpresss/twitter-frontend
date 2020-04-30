import React, { Component } from 'react';

import LayoutStore from '../../../store/layout';
import LayoutIndex from "../../layouts/layout-index/layout-index";
import LayoutLogin from "../../layouts/layout-login/layout-login";
import LayoutSignup from "../../layouts/layout-signup/layout-signup";
import LayoutHome from "../../layouts/layout-home/layout-home";

import './block-layout.scss'

class BlockLayout extends Component {
    getContent() {
        const { layout, storage } = this.props;

        const defaultLayout = <LayoutIndex storage={storage} />;
        const layouts = new Map();

        layouts.set(LayoutStore.general.index, <LayoutIndex storage={storage} />);
        layouts.set(LayoutStore.general.login, <LayoutLogin storage={storage} />);
        layouts.set(LayoutStore.general.register, <LayoutSignup storage={storage} />);
        layouts.set(LayoutStore.general.home, <LayoutHome storage={storage} />);

        const result = layouts.get(layout);
        return result || defaultLayout;
    }

    render() {
        const content = this.getContent();
        return (
            <div className="component-layout">
                {content}
            </div>
        )
    }
}
export  default  BlockLayout;
