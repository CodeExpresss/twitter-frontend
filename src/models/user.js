import RouterStore from 'store/route';
import Carrier from 'managers/carrier';

export default class ModelUser {
    constructor(attrs = null, is_loaded = false) {
        const defaults = {
            user_id: null,
            profile_id: null,
            nickname: null,
            birthday: null,
        };

        this.attrs = Object.assign(defaults, attrs);
        this.is_loaded = is_loaded;
    };

    update(attrs) {
        this.attrs = Object.assign(this.attrs, attrs);
        this.is_loaded = true;
    }

    get(key, defaultv) {
        const spl = key.split('.');

        let result = this.attrs;
        for (let i = 0; i < spl.length; i++) {
            const _key = spl[i];
            result = result[_key];

            if (result === undefined) {
                return defaultv;
            }

            if (result === null) {
                return defaultv || result;
            }
        }
        return result;
    }

    static getCurrentUser(extras) {
        return new Promise((resolve) => {
            const url = RouterStore.api.profile.current;
            Carrier.get(url).then((body) => {
                const user = new ModelUser(body.user, true);
                Object.assign(user, extras);
                resolve(user);
            });
        });
    }

}
