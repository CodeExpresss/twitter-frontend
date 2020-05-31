import React, { Component } from 'react';
import RouterStore from "../../../store/route";

import Button from "../../fragments/button/shard-button";
import HeaderLinks from "../../fragments/header-links/header-links";

import avatar from "../../../asserts/pics/default_profile_normal.png";

import "./left-bar.scss"

class LeftBar extends Component {
    render() {
        const { layout, storage } = this.props;

        const user = storage.get('user');

        return(
            <div className="component__left-bar">
                <div className="left-bar__top">
                    <svg viewBox="0 0 24 24"
                         className="left-bar__svg__wrap">
                        <g>
                            <path
                                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                        </g>
                    </svg>
                    <HeaderLinks layout={layout}/>
                    <Button to={RouterStore.website.home} text={'Чирикать'} size={'medium'} style={'primary'}/>
                </div>
                <div className="left-bar__bottom">
                    <img className="left-bar__bottom__avatar" src={avatar} />
                    <div className="left-bar__bottom__user">
                        { user.get('nickname') || 'Неопознанное привидение' }
                    </div>
                    <svg viewBox="0 0 24 24"
                         className="left-bar__svg">
                        <g>
                            <path
                                d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path>
                        </g>
                    </svg>
                </div>
            </div>
        );
    }
}
export default LeftBar;