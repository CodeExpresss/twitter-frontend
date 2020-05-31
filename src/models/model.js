class Model {
    constructor(attrs = null) {
        this.attrs = attrs || {};
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

    update(attrs) {
        this.attrs = Object.assign(this.attrs, attrs);
    }
}

export default Model;
