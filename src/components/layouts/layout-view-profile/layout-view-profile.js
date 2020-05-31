import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import $ from "jquery";
import Page from "../../base-block/block-page/page";
import RouterStore from "../../../store/route";
import Button from "../../fragments/button/shard-button";
import Carrier from "managers/carrier";
import ModelUser from "../../../models/user";

import background from "../../../asserts/pics/profile-bg.png";
import avatar from "../../../asserts/pics/default_profile_normal.png";

import "../layout-profile/layout-profile.scss";


class LayoutViewProfile extends Component {
    constructor(props) {
        super(props);
        this.handlerFollow = this.handlerFollow.bind(this);

        this.state = {
            loading: true,
            profile: null,
        };
    }

    componentDidMount() {
        this.loadProfile();
    }

    loadProfile() {
        const { storage, match } = this.props;

        const user = storage.get('user');

        const { id } = match.params;

        if (user.get('profile_id') === id) {
            this.setState({
                profile: user,
            });
            return;
        }

        Carrier.get(`/api/profile/?id=${id}`).then((body) => {
            const { status, user } = body;
            if (status == 200) {
                this.setState({
                    profile: new ModelUser(user, true),
                    loading: false,
                });
            } else {
                // Профиль не найден
                this.setState({ loading: false });
            }
        });
    }

    handlerFollow() {
        const { loading, profile } = this.state;
        const { storage } = this.props;
        const user = storage.get('user');

        if(!loading) {
            const payload = {
                "inviter_id": profile.attrs.profile_id,
                "invitee_id": user.attrs.profile_id,
            };

            Carrier.post('/api/profile/follow/', {payload}).then((body) => {
                body.status == 200 ? location.reload() : null;
            });
        }
    }

    checkIsOwnPage() {
        const { storage, match } = this.props;
        const { id } = match.params;
        const user = storage.get('user');

        return id === user.get('profile_id');
    }

    render() {
        const {layout, storage} = this.props;
        const {profile, loading} = this.state;

        const user = storage.get('user');

        if (this.checkIsOwnPage()) {
            return (
                <Redirect to={RouterStore.website.profile}/>
            )
        }

            return (
                <Page layout={layout} storage={storage}>
                    {!loading &&
                    <div className="layout-profile">
                        <div className="layout-profile__title"></div>
                        <div className="layout-profile__placeholder"/>
                        <div className="layout-profile__content">
                            <img className="profile__avatar" src={avatar}/>
                            <div className="profile__link">
                                <div className="profile__link__follow" onClick={this.handlerFollow}>Подписаться</div>
                            </div>
                            <div className="profile__info">
                                <div className="profile__nickname">
                                    {profile.get('nickname') || 'Неопознанное привидение'}
                                </div>
                                <div className="profile__subscriptions">
                                    <div className="profile__subscriptions__item">Подписчиков 0</div>
                                    <div className="profile__subscriptions__item">Подписок 0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                </Page>
            );
        }
}

export default withRouter(LayoutViewProfile)