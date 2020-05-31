import React, { Component } from 'react';
import Page from "../../base-block/block-page/page";
import RouterStore from "../../../store/route";
import Button from "../../fragments/button/shard-button";

import background from "../../../asserts/pics/profile-bg.png";
import avatar from "../../../asserts/pics/default_profile_normal.png";

import "./layout-profile.scss";

export default class LayoutProfile extends Component {
    render() {
        const { layout, storage } = this.props;
        const user = storage.get('user');

        return(
            <Page layout={layout} storage={storage}>
                <div className="layout-profile">
                    <div className="layout-profile__title"></div>
                    <div className="layout-profile__placeholder" />
                    <div className="layout-profile__content">
                        <img className="profile__avatar" src={avatar} />
                        <div className="profile__link">
                            <Button to={RouterStore.website.home} text="Настройки" style="secondary"/>
                        </div>
                        <div className="profile__info">
                            <div className="profile__nickname">
                                { user.get('nickname') || 'Неопознанное привидение' }
                            </div>
                            <div className="profile__subscriptions">
                                <div className="profile__subscriptions__item">Подписчиков 0</div>
                                <div className="profile__subscriptions__item">Подписок 0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}