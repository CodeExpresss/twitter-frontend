import Carrier from "managers/carrier";
import Model from "./model";

export default class ModelTweet extends Model{
    constructor(attrs = null) {
        super(attrs);
        const defaults = {
            id: null,
            text: null,
            author: [],
        };

        this.attrs = Object.assign(defaults, attrs);
    }

    static fetchArticleList(url) {
        return new Promise((resolve) => {
            Carrier.get(url).then((body) => {
                const tweets = body.data.map((tweet) => new ModelTweet(tweet));
                resolve({ tweets });
            });
        });
    }
}