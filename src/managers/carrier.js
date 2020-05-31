import Cookies from 'js-cookie';
import RouterStore from '../store/route';


export default class Carrier {

    static getBackendUrl(url) {
        return `${RouterStore.baseBackendUrl}${url}`;
    }

    static getCSRFToken() {
        return Cookies.get('csrftoken');
    }

    static get(url) {
        const _url = this.getBackendUrl(url);
        const CSRFToken = this.getCSRFToken();

        return fetch(_url, {
            method: 'GET',
            credentials: 'include',
            mode: 'cors',
            headers: {
            },
        }).then((response) => response.json());
    }

    static post(url, params = {}) {
        const {
            payload: data,
            headers,
            serialize = true,
            external = false,
        } = params;

        const _url = external ? url : this.getBackendUrl(url);

        return fetch(_url, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
                ...headers,
            },
            body: serialize ? JSON.stringify(data) : data,
        }).then((response) => response.json());
    }

}
