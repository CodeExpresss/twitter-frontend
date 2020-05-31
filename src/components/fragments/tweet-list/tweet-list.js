import React, { Component } from 'react';

import Tweet from "components/fragments/tweet/tweet";
import RouterStore from "../../../store/route";
import ModelTweet from "../../../models/tweet";

import "./tweet-list.scss";

export default class TweetList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: [],
            loading: false,
        };
    }

    componentDidUpdate() {
        const { storage } = this.props;
        const { loading } = this.state;

        const user  = storage.get('user');
        if(user.is_loaded && !loading ) {
            ModelTweet.fetchArticleList(RouterStore.api.tweet.index.replace(':id', user.attrs.profile_id)).then((tweets) => {
                this.setState(tweets);
                this.setState({loading: true});
            });
        }
    }

    render() {
        const { tweets } = this.state;
        const tweetsTmpl = tweets.map((tweet) => (
            <Tweet
                key={tweet.get('id')}
                text={tweet.get('text')}
                author={tweet.get('author')}
            />
            ));
        return(
            <div className="component-tweet-list">
                { tweetsTmpl }
            </div>
        );
    }
}