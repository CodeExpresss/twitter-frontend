import React, { Component } from 'react';
import $ from 'jquery';

import Page from "../../base-block/block-page/page";
import ShardButton from "components/fragments/button/shard-button";
import avatar from "../../../asserts/pics/default_profile_normal.png";
import TweetList from "components/fragments/tweet-list/tweet-list";
import Carrier from "managers/carrier";
import RouterStore from "store/route";

import "./layout-home.scss"

class LayoutHome extends Component {
    constructor(props) {
        super(props);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.handlerOnChange = this.handlerOnChange.bind(this);
        this.state = {
            text: ''
        };
    }

    handlerOnChange(event) {
        this.setState({text: event.target.value});
    }

    handlerSubmit(event) {
        event.preventDefault();
        const $target = $(event.target);
        const action = $target.attr('action');
        const { storage } = this.props;

        const user = storage.get('user');

        const payload = {
            "text": this.state.text,
            "id": user.attrs.profile_id,
        };

        const baseClass = 'form__add-tweet__errors';
        const inputGroupSelector = `[class="${baseClass}"]`;

        Carrier.post(action, {payload}).then((body) => {
            console.log(body);
            body.status == 200 ? location.reload() : $(inputGroupSelector).text(body.message);
        });

    };

    render() {
        const { layout, storage } = this.props;
        return(
            <Page layout={layout} storage={storage}>
                <div className="layout-home">
                    <div className="layout-home__title">
                        Home
                    </div>
                    <div className="layout-home__content">
                        <div className="layout-home__content__wrap">
                            <div className="form__add-tweet">
                                <img className="form__add-tweet__profile" src={avatar} />
                                <form className="form__add-tweet__form" action={RouterStore.api.tweet.create} onSubmit={this.handlerSubmit}>
                                    <textarea className="form__add-tweet__input"  value={this.state.text} onChange={this.handlerOnChange} name="text" placeholder="Что произошло?" maxLength="140"/>
                                    <div className="form__add-tweet__bottom">
                                        <svg viewBox="0 0 24 24"
                                             className="form__add-tweet__bottom__svg">
                                            <g>
                                                <path
                                                    d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"></path>
                                                <circle cx="8.868" cy="8.309" r="1.542"></circle>
                                            </g>
                                        </svg>
                                        <span className="form__add-tweet__errors"></span>
                                        <ShardButton type="submit" text={"Чирикнуть"} style={"primary"} float/>
                                    </div>
                                </form>
                            </div>
                            <TweetList storage={storage}/>
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}
export default LayoutHome;