import React, { Component } from 'react';

import LayoutStore from '../../../store/layout';
import LayoutIndex from "../../layouts/layout-index/layout-index";

class BlockLayout extends Component {
    getContent() {
        const { layout, storage } = this.props;

        const defaultLayout = <LayoutIndex storage={storage} />;
        const layouts = new Map();

        layouts.set(LayoutStore.general.index, <LayoutIndex storage={storage} />);

        const result = layouts.get(layout);
        return result || defaultLayout;
    }

    render() {
        const content = this.getContent();

        return (
            <div className="component-layout">
                <div className="component-layout__content">{content}</div>
            </div>
        )
    }
}
export  default  BlockLayout;
